import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

import { INTERNAL_SERVER_ERROR } from "http-status";

export class ServerError extends Error {
  constructor(message, status) {
    super(message);

    Error.captureStackTrace(this, this.constructor);

    this.status = status || INTERNAL_SERVER_ERROR;
  }

  handle(res) {
    const { message, status, stack } = this
    res.status(status)
    res.send({
      error: true,
      message,
      stack: process.env.NODE_ENV === 'development' ? stack : undefined,
    })
  }
}

export function writeFileDirSync(relativeFilename, content) {
  const filename = resolve(__dirname, relativeFilename)
  mkdirSync(dirname(filename), { recursive: true })
  writeFileSync(filename, content)
}
