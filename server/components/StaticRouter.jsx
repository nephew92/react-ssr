import RouterBlock from "@/client/components/Router"
import PartialModule from "@/modules/partial/client"

import als from "../utils/als"

import BlockTree from "./BlockTree"

export default function StaticRouterBlock({ blocks, ...props }) {
  return <RouterBlock>
    {blocks.map(route(''))}
  </RouterBlock>
}

function route(parentRoute) {
  return ({ path, children, routes, ...props }) => {
    path = `${parentRoute}${path}`

    const { body: { location } } = als.get('request')

    return {
      path,
      children: location.startsWith(path) ? <BlockTree blocks={children} /> : <PartialModule path={path} />,
      routes: routes && routes?.map(route(path)),
      ...props,
    }
  }
}
