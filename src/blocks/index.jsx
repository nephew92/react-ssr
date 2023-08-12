import lazy from "@Utils/lazy";

const Header1 = lazy(() => import("@Blocks/content/Header1"));
const ListGroup = lazy(() => import("@Blocks/content/ListGroup"));
const ListGroupItem = lazy(() => import("@Blocks/content/ListGroupItem"));
const Col = lazy(() => import("@Blocks/layout/Col"));
const Container = lazy(() => import("@Blocks/layout/Container"));
const Flex = lazy(() => import("@Blocks/layout/Flex"));
const Row = lazy(() => import("@Blocks/layout/Row"));

const Registration = lazy(() => import("@Blocks/modules/Registration"))
const Root = lazy(() => import("@Blocks/modules/Root"))

export const BLOCKS = {
  Header1,
  Flex,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Registration,
  Root,
}
