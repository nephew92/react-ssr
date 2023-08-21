import FormBlockProvider from "@/client/blocks/modules/Form";
import BlockTree from "@/server/components/BlockTree";
import { formLoad } from "@/server/service/api/back";

export default async function FormModule() {
  // feth form from allocation
  const { definition } = await formLoad()

  return <>
    <FormBlockProvider>
      <BlockTree blocks={definition} />
    </FormBlockProvider>
  </>
}
