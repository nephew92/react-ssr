import { Route, Routes } from "react-router-dom"

import { BLOCKS } from "@/client/blocks"

export default function BlocksComponent({ blocks }) {
  return <>
    {blocks.map((block, idx) => {
      if (typeof block === 'string') {
        return block
      }
      const { component, children, props } = block

      if (component === 'Routes') {
        return <Routes key={idx} {...props}>
          {children.map(({ children, props: { path } }, idx) => <Route key={idx}
            path={path}
            element={<BlocksComponent blocks={children} />}
          />)}
        </Routes>
      }

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
