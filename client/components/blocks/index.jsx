import { lazy } from "react";

import Header1 from "./content/Header1";
import ListGroup from "./content/ListGroup";
import ListGroupItem from "./content/ListGroupItem";
import Col from "./layout/Col";
import Container from "./layout/Container";
import Flex from "./layout/Flex";
import Row from "./layout/Row";

const Registration = lazy(() => import(`./modules/Registration`))
const Root = lazy(() => import(`./modules/Root`))

export const LAZY_MODULE_BLOCKS = {
  Registration,
  Root,
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
