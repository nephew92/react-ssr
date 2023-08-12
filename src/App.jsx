import BlocksComponent from "@Components/Block";
import HTML from "@Components/Html";

export function App({ blocks }) {
  return <HTML>
    <BlocksComponent blocks={blocks} />
  </HTML>
}
