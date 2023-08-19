import { Suspense, lazy } from "react"

import Loading from "@/client/components/Loading"

export default importer => {
  const Component = lazy(importer)
  return props => <Suspense fallback={<Loading />}>
    <Component {...props} />
  </Suspense>
}
