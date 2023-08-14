import lazy from "@Theme/utils/lazy";

const Routes = lazy(() => import("@Theme/blocks/router/Routes"));
const Route = lazy(() => import("@Theme/blocks/router/Route"));
const Link = lazy(() => import("@Theme/blocks/router/Link"));

const Header1 = lazy(() => import("@Theme/blocks/content/Header1"));

const ListGroup = lazy(() => import("@Theme/blocks/bootstrap/ListGroup"));
const ListGroupItem = lazy(() => import("@Theme/blocks/bootstrap/ListGroupItem"));
const FormGroup = lazy(() => import("@Theme/blocks/bootstrap/FormGroup"));
const Button = lazy(() => import("@Theme/blocks/bootstrap/Button"));
const Input = lazy(() => import("@Theme/blocks/bootstrap/Input"));
const Col = lazy(() => import("@Theme/blocks/bootstrap/Col"));
const Container = lazy(() => import("@Theme/blocks/bootstrap/Container"));
const Row = lazy(() => import("@Theme/blocks/bootstrap/Row"));

const Flex = lazy(() => import("@Theme/blocks/layout/Flex"));

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
  FormGroup,
  Button,
  Input,
  Link,
}
