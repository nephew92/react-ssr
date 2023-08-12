import { lazy } from "react";

import Header1 from "@Blocks/content/Header1";
import ListGroup from "@Blocks/content/ListGroup";
import ListGroupItem from "@Blocks/content/ListGroupItem";
import Col from "@Blocks/layout/Col";
import Container from "@Blocks/layout/Container";
import Flex from "@Blocks/layout/Flex";
import Row from "@Blocks/layout/Row";

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
