import { execSync } from 'node:child_process'

import { Router as expressRouter } from "express";
import { BAD_REQUEST } from "http-status";

import { ServerError, writeFileDirSync } from "@Server/utils";

const router = expressRouter()

router.post('/build', (req, res, next) => {
  try {
    const { body: { blocks, theme } = {} } = req

    if (!blocks) {
      throw new ServerError('blocks field is required', BAD_REQUEST)
    }

    writeFileDirSync(`../themes/${theme}/blocks.json`, JSON.stringify(blocks))

    // run yarn build:theme
    execSync(`THEME=${theme} yarn build:theme > build/themes/${theme}/log.text`)
    // generate tarball

    // upload tarball to S3

    res.json({ success: true })
  } catch (err) {
    if (err.handle) {
      return err.handle(res)
    }
    next(err)
  }
})

export default router
