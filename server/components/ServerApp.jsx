'use server'
'use async'
'not use hook'

import TestBlock from "./Test"

export default async function ServerApp(props) {
  return <div>
    conteudo renderizado pelo servidor
    <TestBlock />
  </div>
}
