import { renderToPipeableStream } from "react-dom/server";

import { App } from "../client/App.jsx";
import blockRegistration from "../mocks/block-registration";

export const render = (request, response, next) => {
  const stream = renderToPipeableStream(<App blocks={blockRegistration} />, {
    bootstrapScripts: ["bundle.js"],
    onShellReady() {
      response.setHeader("content-type", "text/html");
      stream.pipe(response);
    },
  });
};
