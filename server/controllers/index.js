import express, { Router as expressRouter } from "express";

import render from "./render";

const controllers = expressRouter()

controllers.get('/', render.index)

controllers.put('/react', render.ssr);

controllers.use(express.static('build/themes/ctc/static'));

export default controllers
