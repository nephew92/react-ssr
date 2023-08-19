import { existsSync } from "node:fs";
import { resolve } from "node:path";

import { static as expressStatic } from "express";

import { blueprint } from "@/server/service/api/back";

import Cache from "./cache-manager";

// import { App } from "@/theme/ServerApp";

const CACHE_MANAGER = new Cache(60)

export class ThemeMaganer {
  constructor(name) {
    this.name = name
    this.themeDir = resolve(`./build/themes/${this.name}`)
    this.staticDir = resolve(`${this.themeDir}/static`)
    this.static = expressStatic(this.staticDir)
  }

  isDownloaded() {
    return existsSync(this.staticDir)
  }

  getApp() {
    if (!this._app) {
      this.mountApp()
    }
    return this._app
  }

  mountApp() {
    // const blocks = JSON.parse(readFileSync(`${this.themeDir}/blocks.json`, { encoding: 'utf-8' }))
    // this._app = <App blocks={blocks} />
  }

  /**
   * @type {{[key: string]: ThemeMaganer}}
   */
  static themes = {}

  static create(name) {
    const theme = new this(name)
    if (theme.isDownloaded()) {
      this.themes[name] = theme
      return theme
    }
    return null
  }

  static get(name) {
    return this.themes[name]
  }

  static getOrCreate(name) {
    return this.get(name) || this.create(name)
  }
}

export class SiteManager {
  constructor(domain, theme) {
    this.domain = domain
    this.theme = ThemeMaganer.getOrCreate(theme)
  }

  /**
   * @type {{[key: string]: SiteManager}}
   */
  static domains = {}

  static async create(domain) {
    return await CACHE_MANAGER.get(domain, async () => {
      try {
        const { theme, aliases } = await blueprint(domain)

        if (theme) {
          const site = new this(domain, theme)
          const domains = [].concat(domain, aliases || [])

          for (const domain of domains) {
            this.domains[domain] = site
          }
          return site
        }
      } catch (error) {
        // ingore
      }
      return null
    })
  }

  static get(domain) {
    return this.domains[domain]
  }
}
