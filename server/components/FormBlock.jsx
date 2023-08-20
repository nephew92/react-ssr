import BlocksComponent from "@/client/components/Block";
import { formLoad } from "@/server/service/api/back";

export default async function FormBlockServer({ ...props }) {
  // feth form from allocation
  const { definition } = await formLoad()
  return <BlocksComponent blocks={definition} />
}
