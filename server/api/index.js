import { execSync } from 'node:child_process'

import { Router as expressRouter } from "express";
import { parse as parseYml } from "yaml";

import { HTTP, ServerError, handler, writeFileDirSync } from "@Server/utils";
import { ThemeMaganer } from '@Server/utils/theme-manager';

const router = expressRouter()

router.post('/build', handler((req, res, next) => {
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
}), handler((req, res) => {
  const { locals: { data } } = req

  if (!data) {
    throw new ServerError('A body is required.', HTTP.BAD_REQUEST).json()
  }

  const { blocks, theme } = data
  if (!blocks) {
    throw new ServerError('blocks field is required', HTTP.BAD_REQUEST).json()
  }

  writeFileDirSync(`../themes/${theme}/blocks.json`, JSON.stringify(blocks))

  // run yarn build:theme
  execSync(`THEME=${theme} yarn build:theme > build/themes/${theme}/build.log.text`)
  ThemeMaganer.getOrCreate(theme).mountApp()
  // generate tarball

  // upload tarball to S3

  res.json({ success: true })
}))

export default router
