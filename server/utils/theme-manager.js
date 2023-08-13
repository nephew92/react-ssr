import { existsSync } from "node:fs";
import { resolve } from "node:path";

import { static as expressStatic } from "express";

const sites = {
  'new.local.consumertestconnect.com': 'ctc',
  'new.local.shopgala.com': 'shopgala',
}

class Site {
  constructor(domain, theme, { aliases = [] } = {}) {
    this.domain = domain
    this.theme = theme
    this.aliases = aliases

    this.themeDir = resolve(`./build/themes/${this.theme}`)
    this.staticDir = resolve(`${this.themeDir}/static`)
    this.static = expressStatic(this.staticDir)
  }

  get isDownloaded() {
    return existsSync(this.staticDir)
  }

  get blocks() {
    return require(`@Build/themes/${this.theme}/blocks.json`)
  }
}

export default new class ThemeMaganer {
  /**
   * @type {{[key: string]: Site}}
   */
  domains = {}

  create(domain) {
    const theme = sites[domain]
    if (theme) {
      const site = new Site(domain, theme)
      if (site.isDownloaded) {
        this.domains[domain] = site
        return site
      }
    }
    return null
  }

  get(domain) {
    return this.domains[domain]
  }
}
