import TestUseClient from "./TestUseClient"

export default async function ServerApp(props) {
  return <div>
    conteudo renderizado pelo servidor
    <TestUseClient />
  </div>
}
