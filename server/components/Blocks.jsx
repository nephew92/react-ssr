import Button from "@/client/blocks/bootstrap/Button";
import Col from "@/client/blocks/bootstrap/Col";
import Container from "@/client/blocks/bootstrap/Container";
import FormGroup from "@/client/blocks/bootstrap/FormGroup";
import Input from "@/client/blocks/bootstrap/Input";
import ListGroup from "@/client/blocks/bootstrap/ListGroup";
import ListGroupItem from "@/client/blocks/bootstrap/ListGroupItem";
import Row from "@/client/blocks/bootstrap/Row";
import Title1 from "@/client/blocks/content/Title1";
import FormAddress1 from "@/client/blocks/form/Address1"
import FormAddress2 from "@/client/blocks/form/Address2"
import FormCity from "@/client/blocks/form/City"
import FormContinue from "@/client/blocks/form/Continue"
import FormEmail from "@/client/blocks/form/Email"
import FormFirstName from "@/client/blocks/form/FirstName"
import FormLabel from "@/client/blocks/form/Label"
import FormLastName from "@/client/blocks/form/LastName"
import FormState from "@/client/blocks/form/State"
import Link from "@/client/blocks/router/Link";
import Router, { OutletBLock as Outlet } from "@/client/components/Router";
import Form from "@/modules/form/server";
import Session from "@/modules/session/client";

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
  Router,
  Outlet,
}
