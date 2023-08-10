const path = require("path");

const express = require("express");

const { render } = require("./render");

const app = express();

app.use(express.static(path.resolve(__dirname, "../client")));

app.get("/", render)

app.listen(3000, () => {
  console.log("listening on port 3000");
});
