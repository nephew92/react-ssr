import { renderToPipeableStream } from "react-dom/server";

import { ServerError, handler, HTTP } from "../utils";
import { SiteManager } from "../utils/theme-manager";

export default handler((req, res) => {
  const site = SiteManager.create(req.hostname)
  if (!site) {
    throw new ServerError('site not found', HTTP.NOT_FOUND)
  }

  if (!site?.theme?.isDownloaded()) {
    throw new ServerError('theme not found', HTTP.NOT_FOUND)
  }

  const stream = renderToPipeableStream(site.theme.getApp(), {
    bootstrapScripts: ["js/vendors.bundle.js", "js/runtime.bundle.js", "js/main.bundle.js"],
    onShellReady() {
      res.setHeader("content-type", "text/html");
      stream.pipe(res);
    },
  });
})
