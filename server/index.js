import { json, urlencoded } from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import express from "express";

import api from "./api";
import { render } from "./render";
import { handler } from "./utils";
import themeManager from "./utils/theme-manager";

const app = express();

app.use(compression());
app.use(cookieParser('userenroll'));

app.use(json({ limit: '50mb' }));
app.use(urlencoded({ extended: true, limit: '50mb' }));

app.use('/api', api)

app.use(handler((req, res, next) => {
  const { hostname } = req
  const site = themeManager.get(hostname)
  if (site && site.isDownloaded) {
    return site.static(req, res, next)
  }
  next()
}));

app.get("/", render)

app.listen(3000, () => {
  console.log("listening on port 3000");
});
