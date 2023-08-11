import BlocksComponent from "./components/Block";
import HTML from "./components/Html";

export function App({ blocks }) {
  return <HTML>
    <BlocksComponent blocks={blocks} />
  </HTML>
}
