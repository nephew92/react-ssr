import lazy from "@Theme/utils/lazy";

const Routes = lazy(() => import("@Theme/blocks/layout/Routes"));
const Route = lazy(() => import("@Theme/blocks/layout/Route"));

const Header1 = lazy(() => import("@Theme/blocks/content/Header1"));
const ListGroup = lazy(() => import("@Theme/blocks/content/ListGroup"));
const ListGroupItem = lazy(() => import("@Theme/blocks/content/ListGroupItem"));
const Col = lazy(() => import("@Theme/blocks/layout/Col"));
const Container = lazy(() => import("@Theme/blocks/layout/Container"));
const Flex = lazy(() => import("@Theme/blocks/layout/Flex"));
const Row = lazy(() => import("@Theme/blocks/layout/Row"));

const Registration = lazy(() => import("@Theme/blocks/modules/Registration"))
const Root = lazy(() => import("@Theme/blocks/modules/Root"))

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
  Routes,
  Route,
}
