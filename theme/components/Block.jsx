import { BLOCKS } from "@Theme/blocks"

export default function BlocksComponent({ blocks }) {
  return <>
    {blocks.map((block, idx) => {
      if (typeof block === 'string') {
        return block
      }
      const { component, children, props } = block

      const Component = BLOCKS[component]
      if (Component) {
        return <Component key={idx} {...props}>
          {children && <BlocksComponent blocks={children} />}
        </Component>
      }

      return 'Block not found'
    })}
  </>
}
