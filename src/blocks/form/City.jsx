'use client';

import { Label } from "reactstrap";

import FormColGroupBlock from "./FormColGroup";
import FormInputBlock from "./_FormInput";

export default function FormCityBlock({ col, label, ...props }) {
  return <FormColGroupBlock {...col}>
    <Label htmlFor='city'>{label}</Label>
    <FormInputBlock {...props} id='city' name='city' />
  </FormColGroupBlock>
}
