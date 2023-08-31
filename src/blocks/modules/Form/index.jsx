import FormBlockProvider from "./client";

import { formLoad } from "@/server/service/api/back";
import BlockTree from "@/src/components/BlockTree";

export default async function FormModule() {
  // feth form from allocation
  const { definition } = await formLoad()

  return <>
    <FormBlockProvider>
      <BlockTree blocks={definition} />
    </FormBlockProvider>
  </>
}
