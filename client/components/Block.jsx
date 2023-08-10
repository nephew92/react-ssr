import { Suspense } from "react"

import Loading from "./Loading.jsx"
import { BLOCKS, LAZY_MODULE_BLOCKS } from "./blocks/index.jsx"

export default function Block({ blocks }) {
  return <>
    {blocks.map((block, idx) => {
      if (typeof block === 'string') {
        return block
      }
      const { type, blocks, attributes } = block
      const LazyType = LAZY_MODULE_BLOCKS[type]

      if (LazyType) {
        return <Suspense key={idx} fallback={<Loading />}>
          <LazyType {...attributes}>
            {blocks && <Block blocks={blocks} />}
          </LazyType>
        </Suspense>
      }

      const Type = BLOCKS[type]
      if (Type) {
        return <Type key={idx} {...attributes}>
          {blocks && <Block blocks={blocks} />}
        </Type>
      }

      return 'Block not found'
    })}
  </>
}
