import BlockTree from '@/src/components/BlockTree'

export default function Home({ children, params: { route = [''] } }) {
  const { blocks } = require('@/_mock/react-ssr-theme-ctc.blocks.next.json')

  return <main>
    <BlockTree blocks={blocks} location={`/${route?.join('/')}`} />
    {children}
  </main>
}
