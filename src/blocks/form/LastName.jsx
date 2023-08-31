'use client';

import { Label } from "reactstrap";

import FormColGroupBlock from "./FormColGroup";
import FormInputBlock from "./_FormInput";

export default function FormLastNameBlock({ col, label, ...props }) {
  return <FormColGroupBlock {...col}>
    <Label htmlFor='lastName'>{label}</Label>
    <FormInputBlock {...props} id='lastName' name='lastName' />
  </FormColGroupBlock>
}
