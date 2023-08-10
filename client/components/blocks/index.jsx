import { lazy } from "react";

import Header1 from "./content/Header1.jsx";
import ListGroup from "./content/ListGroup.jsx";
import ListGroupItem from "./content/ListGroupItem.jsx";
import Col from "./layout/Col.jsx";
import Container from "./layout/Container.jsx";
import Flex from "./layout/Flex.jsx";
import Row from "./layout/Row.jsx";

const Registration = lazy(() => import(`./modules/Registration.jsx`))

export const LAZY_MODULE_BLOCKS = {
  Registration,
}

export const BLOCKS = {
  Header1,
  Flex,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
}
