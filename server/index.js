import { resolve } from "node:path";

import { json, urlencoded } from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import express, { static as expressStatic } from "express";

import api from "./api";
import { render } from "./render";
import { handler } from "./utils";

const app = express();

app.use(compression());
app.use(cookieParser('userenroll'));

app.use(json({ limit: '50mb' }));
app.use(urlencoded({ extended: true, limit: '50mb' }));

app.use('/api', api)

const staticMiddlewares = {}

app.use(handler((req, res, next) => {
  const { ['X-THEME']: theme } = req.cookies
  if (theme) {
    const middlreware = staticMiddlewares[theme] = staticMiddlewares[theme] || expressStatic(resolve(__dirname, `../themes/${theme}/static`))
    return middlreware(req, res, next)
  }
  next()
}));

app.get("/", render)

app.listen(3000, () => {
  console.log("listening on port 3000");
});
