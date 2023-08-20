import RouterBlock from "@/client/components/RouteBlock"

import { BLOCKS } from "./Blocks"

export default function BlockTree({ blocks }) {
  return <>
    {blocks.map((block, idx) => {
      if (typeof block === 'string') {
        return block
      }
      const { component, children, props } = block

      if (component === 'Routes') {
        return <RouterBlock key={idx} {...props}>
          {children.map(({ children, props: { path } }) => ({
            path,
            element: <BlockTree blocks={children} />,
          }))}
        </RouterBlock>
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
