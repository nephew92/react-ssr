import lazy from "@Theme/utils/lazy";

const Link = lazy(() => import("@Theme/blocks/router/Link"));

const Title1 = lazy(() => import("@Theme/blocks/content/Title1"));

const ListGroup = lazy(() => import("@Theme/blocks/bootstrap/ListGroup"));
const ListGroupItem = lazy(() => import("@Theme/blocks/bootstrap/ListGroupItem"));
const FormGroup = lazy(() => import("@Theme/blocks/bootstrap/FormGroup"));
const Button = lazy(() => import("@Theme/blocks/bootstrap/Button"));
const Input = lazy(() => import("@Theme/blocks/bootstrap/Input"));
const Col = lazy(() => import("@Theme/blocks/bootstrap/Col"));
const Container = lazy(() => import("@Theme/blocks/bootstrap/Container"));
const Row = lazy(() => import("@Theme/blocks/bootstrap/Row"));

const Flex = lazy(() => import("@Theme/blocks/layout/Flex"));

const Root = lazy(() => import("@Theme/blocks/modules/Root"))

const Form = lazy(() => import("@Theme/blocks/form/Form"))
const FormContinue = lazy(() => import("@Theme/blocks/form/Continue"))
const FormFirstName = lazy(() => import("@Theme/blocks/form/FirstName"))
const FormLastName = lazy(() => import("@Theme/blocks/form/LastName"))
const FormEmail = lazy(() => import("@Theme/blocks/form/Email"))
const FormCity = lazy(() => import("@Theme/blocks/form/City"))
const FormState = lazy(() => import("@Theme/blocks/form/State"))
const FormAddress1 = lazy(() => import("@Theme/blocks/form/Address1"))
const FormAddress2 = lazy(() => import("@Theme/blocks/form/Address2"))

export const BLOCKS = {
  Title1,
  Flex,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Form,
  Root,
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
}
