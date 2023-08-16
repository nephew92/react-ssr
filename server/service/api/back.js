import { backendApi } from "@/server/utils/httpclient"

export async function blueprint(domain) {
  const { data } = await backendApi.get('/blueprint', {
    params: {
      domain,
    },
  })

  return data
}

export async function formLoad() {
  const { data } = await backendApi.get('/form/load')

  return data
}

