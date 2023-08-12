import { resolve } from "node:path";

import express from "express";

import { render } from "./render";

const app = express();

app.use(express.static(resolve(__dirname, "../client")));

app.get("/", render)

app.listen(3000, () => {
  console.log("listening on port 3000");
});
