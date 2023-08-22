import BlockTree from "@/server/components/BlockTree";

export default async function RootModule() {
  const { blocks } = require('@/_mock/react-ssr-theme-ctc.blocks.json')

  return <>
    <BlockTree blocks={blocks} />
  </>
}
