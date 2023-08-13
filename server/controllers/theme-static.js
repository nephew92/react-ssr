import { handler } from "@Server/utils";
import { SiteManager } from "@Server/utils/theme-manager";

export default handler((req, res, next) => {
  const { hostname } = req
  const site = SiteManager.get(hostname)
  if (site?.theme?.isDownloaded()) {
    return site.theme.static(req, res, next)
  }
  next()
})
