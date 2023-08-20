import { Suspense } from "react";

import FormBlockProvider from "@/client/blocks/modules/Form";
import { formLoad } from "@/server/service/api/back";

import BlockTree from "../BlockTree";

async function FormModuleServer() {
  // feth form from allocation
  const { definition } = await formLoad()
  return <>
    <BlockTree blocks={definition} />
  </>
}

export default function FormBlockServer() {
  return <>
    <FormBlockProvider>
      <Suspense fallback={'carregando'}>
        <FormModuleServer />
      </Suspense>
    </FormBlockProvider>
  </>
}
