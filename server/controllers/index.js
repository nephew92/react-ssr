import express, { Router as expressRouter } from "express";

import render from "./render";

const controllers = expressRouter()

controllers.use(express.static('build/themes/ctc/static'));

controllers.put('/react', render.ssr);

controllers.get('/*', render.index)

export default controllers
