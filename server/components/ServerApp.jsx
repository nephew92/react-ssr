'use server'
'use async'
'not use hook'

export default async function ServerApp(props) {
  const pending = await new Promise(resolve => {
    setTimeout(() => resolve('depois de 5 segundos'), 1_000)
  })

  return <div>
    conteudo renderizado pelo servidor {pending}
  </div>
}
