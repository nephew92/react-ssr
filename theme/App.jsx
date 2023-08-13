import BlocksComponent from "@Theme/components/Block";
import HTML from "@Theme/components/Html";
import "./sass/bootstrap.scss"

export function App({ blocks }) {
  return <HTML>
    <BlocksComponent blocks={blocks} />
  </HTML>
}
