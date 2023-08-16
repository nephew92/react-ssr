import { handler } from "@/server/utils";
import { SiteManager } from "@/server/utils/theme-manager";

export default handler((req, res, next) => {
  const { hostname } = req
  const site = SiteManager.get(hostname)
  if (site?.theme?.isDownloaded()) {
    return site.theme.static(req, res, next)
  }
  next()
})
