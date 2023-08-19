import { Router as expressRouter } from "express";
import { NOT_FOUND } from "http-status";

// import build from "./build";
// import form from "./form";

import { ServerError, handler } from "@/server/utils";

const api = expressRouter()

// api.post('/build', build)

// api.use('/form', form)

api.use(handler(async (req, res, next) => {
  throw new ServerError('resource not found', NOT_FOUND).json()
}))

export default api
