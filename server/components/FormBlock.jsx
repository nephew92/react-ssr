import FormProviderBlock from "@/client/blocks/form/Form";
import BlocksComponent from "@/client/components/Block";
import { formLoad } from "@/server/service/api/back";

export default async function FormBlockServer({ ...props }) {
  // feth form from allocation
  const { definition, consumer } = await formLoad()
  return <FormProviderBlock consumer={consumer}>
    <BlocksComponent blocks={definition} />
  </FormProviderBlock>
}
