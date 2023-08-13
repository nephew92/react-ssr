import { renderToPipeableStream } from "react-dom/server";

import { App } from "../src/App";

import { ServerError, handler, HTTP } from "./utils";
import themeManager from "./utils/theme-manager";

export const render = handler((req, res) => {
  const site = themeManager.get(req.hostname) || themeManager.create(req.hostname)
  if (!site) {
    throw new ServerError('site not found', HTTP.NOT_FOUND)
  }
  const stream = renderToPipeableStream(<App blocks={site.blocks} />, {
    bootstrapScripts: ["js/bundle.js"],
    onShellReady() {
      res.setHeader("content-type", "text/html");
      stream.pipe(res);
    },
  });
})
