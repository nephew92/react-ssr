import { Router as expressRouter } from "express";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "http-status";

import { formLoad } from "@/server/service/api/back";
import { ServerError, handler } from "@/server/utils";

const form = expressRouter()

form.post('/submit', handler(async (req, res, next) => {
  throw new ServerError('not implemented yet', INTERNAL_SERVER_ERROR).json()
}))

form.get('/load', handler(async (req, res, next) => {
  if (!req.get('referer')) {
    throw new ServerError('invalid request', BAD_REQUEST)
  }

  const data = await formLoad()

  res.json(data)
}))

export default form
