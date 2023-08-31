import BlockTree from "./BlockTree"

export default function StaticRouterBlock({ blocks, location }) {
  const { children } = blocks.find(({ path }) => location.startsWith(path)) || {}

  if (!children) {
    console.log('route not found');
    return null
  }

  return <BlockTree blocks={children} location={location} />
}
