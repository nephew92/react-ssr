import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

import { static as expressStatic } from "express";

import { App } from "../../src/App";

const SITES = {
  'new.local.consumertestconnect.com': 'ctc',
  'new.local.shopgala.com': 'shopgala',
}
class Theme {
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
}

export const themeManager = new class ThemeMaganer {
  /**
   * @type {{[key: string]: Theme}}
   */
  themes = {}

  create(name) {
    const theme = new Theme(name)
    if (theme.isDownloaded()) {
      this.themes[name] = theme
      return theme
    }
    return null
  }

  get(name) {
    return this.themes[name]
  }

  getOrCreate(name) {
    return this.get(name) || this.create(name)
  }
}

class Site {
  constructor(domain, theme, { aliases = [] } = {}) {
    this.domain = domain
    this.aliases = aliases
    this.theme = themeManager.getOrCreate(theme)
  }
}

export const siteManager = new class SiteManager {
  /**
   * @type {{[key: string]: Site}}
   */
  domains = {}

  create(domain) {
    const theme = SITES[domain]
    if (theme) {
      const site = new Site(domain, theme)
      this.domains[domain] = site
      return site
    }
    return null
  }

  get(domain) {
    return this.domains[domain]
  }

  getOrCreate(domain) {
    return this.get(domain) || this.create(domain)
  }
}
