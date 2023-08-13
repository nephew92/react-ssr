import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

import { static as expressStatic } from "express";

import { App } from "../../src/App";

const SITES = {
  'new.local.consumertestconnect.com': 'ctc',
  'new.local.shopgala.com': 'shopgala',
}

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
    const blocks = JSON.parse(readFileSync(`${this.themeDir}/blocks.json`, { encoding: 'utf-8' }))
    this._app = <App blocks={blocks} />
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
  constructor(domain, theme, { aliases = [] } = {}) {
    this.domain = domain
    this.aliases = aliases
    this.theme = ThemeMaganer.getOrCreate(theme)
  }

  /**
   * @type {{[key: string]: SiteManager}}
   */
  static domains = {}

  static create(domain) {
    const theme = SITES[domain]
    if (theme) {
      const site = new this(domain, theme)
      this.domains[domain] = site
      return site
    }
    return null
  }

  static get(domain) {
    return this.domains[domain]
  }

  static getOrCreate(domain) {
    return this.get(domain) || this.create(domain)
  }
}
