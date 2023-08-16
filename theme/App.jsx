import BlocksComponent from "@/theme/components/Block";
import HTML from "@/theme/components/Html";
import "./sass/bootstrap.scss"

export function App({ blocks }) {
  return <HTML>
    <BlocksComponent blocks={blocks} />
  </HTML>
}
