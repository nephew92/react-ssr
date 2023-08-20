import { Suspense } from "react"

import SessionBlockProvider from "@/client/blocks/modules/Session"
import { formLoad } from "@/server/service/api/back"

async function SessionModuleServer({ children, ...props }) {
  const { consumer } = await formLoad()

  return <>
    <SessionBlockProvider {...props} session={{ consumer }} >
      {children}
    </SessionBlockProvider>
  </>
}

export default function SessionBlockServer({ children, ...props }) {
  return <Suspense fallback={'carregando'}>
    <SessionModuleServer {...props}>
      {children}
    </SessionModuleServer>
  </Suspense>
}
