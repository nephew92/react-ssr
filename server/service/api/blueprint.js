import { internalApi } from "@Server/utils/httpclient"

export default async function blueprint(domain) {
  const { data } = await internalApi.get('/blueprint', {
    params: {
      domain,
    },
  })

  return data
}
