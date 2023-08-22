import BlockTree from "@/server/components/BlockTree";
import als from "@/server/utils/als";

export default async function PartialModule() {
  const { body: { props: { path } } } = als.get('request')
  const { blocks } = require('@/_mock/react-ssr-theme-ctc.blocks.json')

  const paths = mount(blocks)

  return <>
    <BlockTree blocks={paths[path]} />
  </>
}

function mountRecursive(items, paths, found) {
  if (items) {
    for (const { component, children, path, routes } of items) {
      if (component === 'Route') {
        const route = [...paths, path]
        found(route.join(''), children)
        mountRecursive(routes, route, found)
      } else {
        mountRecursive(children, paths, found)
      }
    }
  }
}

function mount(data) {
  const routes = {}
  mountRecursive(data, [], (paths, children) => {
    routes[paths] = children
  })
  return routes
}
