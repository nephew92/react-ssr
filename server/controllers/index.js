import { Router as expressRouter } from "express";

import api from "./api";
import render from "./render";
import themeStatic from "./theme-static";

const controllers = expressRouter()

controllers.use('/api', api)

controllers.use(themeStatic);

controllers.get("*", render)

export default controllers
