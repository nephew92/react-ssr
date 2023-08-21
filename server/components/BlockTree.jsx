import { BLOCKS } from "./Blocks"
import StaticRouterBlock from "./StaticRouter"

export default function BlockTree({ blocks }) {
  return <>
    {blocks.map((block, idx) => {
      if (typeof block === 'string') {
        return block
      }
      const { component, children, props } = block

      if (component === 'Router') {
        return <StaticRouterBlock key={idx} blocks={children} />
      }

      const Component = BLOCKS[component]
      if (Component) {
        return <Component key={idx} {...props}>
          {children && <BlockTree blocks={children} />}
        </Component>
      }

      return 'Block not found'
    })}
  </>
}
