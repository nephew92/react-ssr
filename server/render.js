import { renderToPipeableStream } from "react-dom/server";

import { App } from "../src/App";
import blocks from "../themes/ctc";

import { ServerError, handler, HTTP } from "./utils";

export const render = handler((req, res) => {
  const stream = renderToPipeableStream(<App blocks={blocks} />, {
    bootstrapScripts: ["js/bundle.js"],
    onShellReady() {
      response.setHeader("content-type", "text/html");
      response.cookie("X-THEME", "ctc");
      stream.pipe(response);
    },
  });
})
