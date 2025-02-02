import { json, urlencoded, text } from "body-parser";
import compression from "compression";
import express from "express";

import controllers from "./controllers";

const app = express();

app.use(compression());

app.use(text());
app.use(json({ limit: '50mb' }));
app.use(urlencoded({ extended: true, limit: '50mb' }));

app.use(controllers)

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

