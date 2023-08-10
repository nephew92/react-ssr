import Block from "./components/Block.jsx";
import HTML from "./components/Html.jsx";

export function App({ blocks }) {
  return <HTML>
    <Block blocks={blocks} />
  </HTML>
}
