import lazy from "@/client/utils/lazy";

const Link = lazy(() => import("@/client/blocks/router/Link"));

const Title1 = lazy(() => import("@/client/blocks/content/Title1"));

const ListGroup = lazy(() => import("@/client/blocks/bootstrap/ListGroup"));
const ListGroupItem = lazy(() => import("@/client/blocks/bootstrap/ListGroupItem"));
const FormGroup = lazy(() => import("@/client/blocks/bootstrap/FormGroup"));
const Button = lazy(() => import("@/client/blocks/bootstrap/Button"));
const Input = lazy(() => import("@/client/blocks/bootstrap/Input"));
const Col = lazy(() => import("@/client/blocks/bootstrap/Col"));
const Container = lazy(() => import("@/client/blocks/bootstrap/Container"));
const Row = lazy(() => import("@/client/blocks/bootstrap/Row"));

const Flex = lazy(() => import("@/client/blocks/layout/Flex"));

const Root = lazy(() => import("@/client/blocks/modules/Root"))

const Form = lazy(() => import("@/client/blocks/form/Form"))
const FormContinue = lazy(() => import("@/client/blocks/form/Continue"))
const FormFirstName = lazy(() => import("@/client/blocks/form/FirstName"))
const FormLastName = lazy(() => import("@/client/blocks/form/LastName"))
const FormEmail = lazy(() => import("@/client/blocks/form/Email"))
const FormCity = lazy(() => import("@/client/blocks/form/City"))
const FormState = lazy(() => import("@/client/blocks/form/State"))
const FormAddress1 = lazy(() => import("@/client/blocks/form/Address1"))
const FormAddress2 = lazy(() => import("@/client/blocks/form/Address2"))
const FormLabel = lazy(() => import("@/client/blocks/form/Label"))

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
  FormLabel,
}
