'use client';

import { Label } from "reactstrap";

import FormColGroupBlock from "./FormColGroup";
import FormInputBlock from "./_FormInput";

export default function FormFirstNameBlock({ col, label, ...props }) {
  return <FormColGroupBlock {...col}>
    <Label htmlFor='firstName'>{label}</Label>
    <FormInputBlock {...props} id='firstName' name='firstName' />
  </FormColGroupBlock>
}
