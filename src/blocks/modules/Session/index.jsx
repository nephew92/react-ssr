import SessionBlockProvider from "./client"

import { formLoad } from "@/server/service/api/back"

export default async function SessionModule({ children, ...props }) {
  const { consumer } = await formLoad()

  return <>
    <SessionBlockProvider {...props} session={{ consumer }} >
      {children}
    </SessionBlockProvider>
  </>
}
