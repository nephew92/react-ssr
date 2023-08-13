import { Router as expressRouter } from "express";

import build from "./build";

const api = expressRouter()

api.post('/build', build)

export default api
