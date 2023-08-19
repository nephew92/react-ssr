import { json, urlencoded, text } from "body-parser";
import compression from "compression";
import express from "express";
import register from "react-server-dom-webpack/node-register";

import controllers from "./controllers";

const app = express();

app.use(compression());

app.use(text());
app.use(json({ limit: '50mb' }));
app.use(urlencoded({ extended: true, limit: '50mb' }));

app.use(controllers)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

register();
