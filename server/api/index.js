import { execSync } from 'node:child_process'

import { Router as expressRouter } from "express";

import { HTTP, ServerError, handler, writeFileDirSync } from "@Server/utils";

const router = expressRouter()

router.post('/build', handler((req, res, next) => {
  const { body: { blocks, theme } = {} } = req

  if (!blocks) {
    throw new ServerError('blocks field is required', HTTP.BAD_REQUEST).json()
  }

  writeFileDirSync(`../themes/${theme}/blocks.json`, JSON.stringify(blocks))

  // run yarn build:theme
  execSync(`THEME=${theme} yarn build:theme > build/themes/${theme}/log.text`)
  // generate tarball

  // upload tarball to S3

  res.json({ success: true })
}))

export default router
