'use client';

// preload basic blocks
import Button from "@/client/blocks/bootstrap/Button";
import Col from "@/client/blocks/bootstrap/Col";
import Container from "@/client/blocks/bootstrap/Container";
import FormGroup from "@/client/blocks/bootstrap/FormGroup";
import Input from "@/client/blocks/bootstrap/Input";
import Row from "@/client/blocks/bootstrap/Row";
import Title1 from "@/client/blocks/content/Title1";
import Session from "@/client/blocks/modules/Session"
import Link from "@/client/blocks/router/Link";

import lazy from "../utils/lazy";

// lazy on demand blocks
const ListGroup = lazy(() => import("@/client/blocks/bootstrap/ListGroup"));
const ListGroupItem = lazy(() => import("@/client/blocks/bootstrap/ListGroupItem"));

// lazy form blocks
const FormAddress1 = lazy(() => import("@/client/blocks/form/Address1"))
const FormAddress2 = lazy(() => import("@/client/blocks/form/Address2"))
const FormCity = lazy(() => import("@/client/blocks/form/City"))
const FormContinue = lazy(() => import("@/client/blocks/form/Continue"))
const FormEmail = lazy(() => import("@/client/blocks/form/Email"))
const FormFirstName = lazy(() => import("@/client/blocks/form/FirstName"))
const Form = lazy(() => import("@/client/blocks/form/Form"))
const FormLabel = lazy(() => import("@/client/blocks/form/Label"))
const FormLastName = lazy(() => import("@/client/blocks/form/LastName"))
const FormState = lazy(() => import("@/client/blocks/form/State"))

export const BLOCKS = {
  Title1,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Form,
  Session,
  FormGroup,
  Button,
  Input,
  Link,
  FormFirstName,
  FormLastName,
  FormEmail,
  FormCity,
  FormState,
  FormAddress1,
  FormAddress2,
  FormContinue,
  FormLabel,
}
