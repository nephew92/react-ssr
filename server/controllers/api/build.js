import { execSync } from 'node:child_process'
import { createWriteStream } from 'node:fs';
import { get as httpGet } from 'node:https';

import { parse as parseYml } from "yaml";

import { HTTP, ServerError, handler, writeFileDirSync } from "@Server/utils";
import { ThemeMaganer } from '@Server/utils/theme-manager';

export default [
  handler((req, res, next) => {
    const { query: { mode = 'json' }, body } = req
    req.locals ??= {}

    switch (mode) {
      case 'yaml': {
        try {
          req.locals.data = parseYml(body)
          break
        } catch (error) {
          throw new ServerError('Invalid YAML', HTTP.BAD_REQUEST).json()
        }
      }
      default: {
        if (typeof body === 'string') {
          try {
            req.locals.data = JSON.parse(body)
            break
          } catch (error) {
            throw new ServerError('Invalid body content', HTTP.BAD_REQUEST).json()
          }
        }
        if (typeof body === 'object') {
          req.locals.data = body
        }
      }
    }
    next()
  }),
  handler(async (req, res) => {
    const { locals: { data } } = req

    if (!data) {
      throw new ServerError('A body is required.', HTTP.BAD_REQUEST).json()
    }

    const { blocks, theme, media } = data
    if (!blocks) {
      throw new ServerError('blocks field is required', HTTP.BAD_REQUEST).json()
    }

    writeFileDirSync(`../themes/${theme}/blocks.json`, JSON.stringify(blocks))

    // run yarn build:theme
    execSync(`THEMES=${theme} yarn build:theme > build/themes/${theme}/build.log.text`)

    if (Array.isArray(media)) {
      await downloadMedia(media, `./build/themes/${theme}/static`)
    }

    ThemeMaganer.getOrCreate(theme).mountApp()
    // generate tarball

    // upload tarball to S3

    res.json({ success: true })
  }),
]

async function downloadMedia(items, folder) {
  if (Array.isArray(items)) {
    await Promise.all(items.map(({ file, url }) => downloadFile(`${folder}/${file}`, url)))
  }
}

async function downloadFile(filepath, url) {
  return await new Promise(resolve => httpGet(url, response => {
    const file = createWriteStream(filepath, { autoClose: true });
    response.pipe(file)
    file.on('finish', resolve);
  }));
}
