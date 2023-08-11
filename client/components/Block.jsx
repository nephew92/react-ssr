import { Suspense } from "react"

import Loading from "./Loading"
import { BLOCKS, LAZY_MODULE_BLOCKS } from "./blocks/index"

export default function BlocksComponent({ blocks }) {
  return <>
    {blocks.map((block, idx) => {
      if (typeof block === 'string') {
        return block
      }
      const { component, children, props } = block
      const LazyModuleComponent = LAZY_MODULE_BLOCKS[component]

      if (LazyModuleComponent) {
        return <Suspense key={idx} fallback={<Loading />}>
          <LazyModuleComponent {...props}>
            {children && <BlocksComponent blocks={children} />}
          </LazyModuleComponent>
        </Suspense>
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
