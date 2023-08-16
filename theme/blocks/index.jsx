import lazy from "@/theme/utils/lazy";

const Link = lazy(() => import("@/theme/blocks/router/Link"));

const Title1 = lazy(() => import("@/theme/blocks/content/Title1"));

const ListGroup = lazy(() => import("@/theme/blocks/bootstrap/ListGroup"));
const ListGroupItem = lazy(() => import("@/theme/blocks/bootstrap/ListGroupItem"));
const FormGroup = lazy(() => import("@/theme/blocks/bootstrap/FormGroup"));
const Button = lazy(() => import("@/theme/blocks/bootstrap/Button"));
const Input = lazy(() => import("@/theme/blocks/bootstrap/Input"));
const Col = lazy(() => import("@/theme/blocks/bootstrap/Col"));
const Container = lazy(() => import("@/theme/blocks/bootstrap/Container"));
const Row = lazy(() => import("@/theme/blocks/bootstrap/Row"));

const Flex = lazy(() => import("@/theme/blocks/layout/Flex"));

const Root = lazy(() => import("@/theme/blocks/modules/Root"))

const Form = lazy(() => import("@/theme/blocks/form/Form"))
const FormContinue = lazy(() => import("@/theme/blocks/form/Continue"))
const FormFirstName = lazy(() => import("@/theme/blocks/form/FirstName"))
const FormLastName = lazy(() => import("@/theme/blocks/form/LastName"))
const FormEmail = lazy(() => import("@/theme/blocks/form/Email"))
const FormCity = lazy(() => import("@/theme/blocks/form/City"))
const FormState = lazy(() => import("@/theme/blocks/form/State"))
const FormAddress1 = lazy(() => import("@/theme/blocks/form/Address1"))
const FormAddress2 = lazy(() => import("@/theme/blocks/form/Address2"))
const FormLabel = lazy(() => import("@/theme/blocks/form/Label"))

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
