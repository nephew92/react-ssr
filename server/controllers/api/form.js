import { Router as expressRouter } from "express";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "http-status";

import { ServerError, handler } from "@Server/utils";

const form = expressRouter()

form.post('/submit', handler(async (req, res, next) => {
  throw new ServerError('not implemented yet', INTERNAL_SERVER_ERROR).json()
}))

form.get('/load', handler(async (req, res, next) => {
  if (!req.get('referer')) {
    throw new ServerError('invalid request', BAD_REQUEST)
  }

  res.json({
    firstName: 'Joao',
    lastName: 'Banana',
    email: 'banana@nana.com',
    city: 'Bananaville',
    state: 'Bananalandia',
    address1: 'banana split st, 44',
    address2: 'apt 55',
  })
}))

export default form
