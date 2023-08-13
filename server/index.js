import { json, urlencoded, text } from "body-parser";
import * as compression from "compression";
import * as express from "express";

import controllers from "./controllers";

const app = express();

app.use(compression());

app.use(text());
app.use(json({ limit: '50mb' }));
app.use(urlencoded({ extended: true, limit: '50mb' }));

app.use(controllers)

app.listen(3000, () => {
  console.log("listening on port 3000");
});
