import { backendApi } from "@Server/utils/httpclient"

export default async function blueprint(domain) {
  const { data } = await backendApi.get('/blueprint', {
    params: {
      domain,
    },
  })

  return data
}
