import RouterBlock from "@/client/components/Router"

import BlockTree from "./BlockTree"

export default function StaticRouterBlock({ blocks, ...props }) {
  return <RouterBlock>
    {blocks.map(route(''))}
  </RouterBlock>
}

function route(parentRoute) {
  return ({ path, children, routes, ...props }) => {
    path = `${parentRoute}${path}`

    return {
      path,
      children: <BlockTree blocks={children} />,
      routes: routes && routes?.map(route(path)),
      ...props,
    }
  }
}
