import { Suspense } from "react";

import FormProviderBlock from "@/client/blocks/form/Form";
import BlocksComponent from "@/client/components/Block";
import { formLoad } from "@/server/service/api/back";

async function FormBlockServer() {
  // feth form from allocation
  const { definition } = await formLoad()
  return <FormProviderBlock>
    <BlocksComponent blocks={definition} />
  </FormProviderBlock>
}

export default function FormBlock() {
  return <Suspense fallback={'carregando'}>
    <FormBlockServer />
  </Suspense>
}
