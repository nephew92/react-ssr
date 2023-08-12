import { renderToPipeableStream } from "react-dom/server";

import { App } from "../src/App";
import blocks from "../themes/ctc";

export const render = (request, response, next) => {
  const stream = renderToPipeableStream(<App blocks={blocks} />, {
    bootstrapScripts: ["bundle.js"],
    onShellReady() {
      response.setHeader("content-type", "text/html");
      stream.pipe(response);
    },
  });
};
