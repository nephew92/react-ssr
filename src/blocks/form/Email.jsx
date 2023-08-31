'use client';

import { Label } from "reactstrap"

import FormColGroupBlock from "./FormColGroup"
import FormInputBlock from "./_FormInput"

export default function FormEmailBlock({ col, label, ...props }) {
  return <FormColGroupBlock {...col}>
    <Label htmlFor='email'>{label}</Label>
    <FormInputBlock {...props} id='email' name='email' />
  </FormColGroupBlock>
}

