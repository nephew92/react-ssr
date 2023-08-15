import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

import * as HTTP from "http-status";

export { HTTP }

export class ServerError extends Error {
  constructor(message, status) {
    super(message);

    Error.captureStackTrace(this, this.constructor);

    this.status = status || HTTP.INTERNAL_SERVER_ERROR;
  }

  handle(res) {
    const { message, status, stack, sendJson } = this
    res.status(status)
    if (sendJson) {
      return res.json({
        error: true,
        message,
        stack: process.env.NODE_ENV === 'development' ? stack : undefined,
      })
    }
    res.send(message)
  }

  json() {
    this.sendJson = true
    return this
  }
}

export function writeFileDirSync(relativeFilename, content) {
  const filename = resolve(__dirname, relativeFilename)
  mkdirSync(dirname(filename), { recursive: true })
  writeFileSync(filename, content)
}

/**
 * @template {import("express").RequestHandler} T
 * @param {T} requestHandler
 * @returns {T}
 */
export function handler(requestHandler) {
  return async (req, res, next) => {
    try {
      await requestHandler(req, res, next)
    } catch (err) {
      if (err instanceof ServerError) {
        return err.handle(res)
      }
      next(err)
    }
  }
}
