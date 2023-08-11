import { createElement } from "react";

import { renderToPipeableStream } from "react-dom/server";

import { App } from "../client/App";
import blocks from "../mocks/block-registration";

export const render = (request, response, next) => {
  const root = createElement(App, { blocks })
  const stream = renderToPipeableStream(root, {
    bootstrapScripts: ["bundle.js"],
    onShellReady() {
      response.setHeader("content-type", "text/html");
      stream.pipe(response);
    },
  });
};
