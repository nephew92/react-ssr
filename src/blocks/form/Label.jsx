'use client';

import { Label } from "reactstrap";

import FormColGroupBlock from "./FormColGroup";

export default function FormLabelBlock({ col, label, ...props }) {
  return <FormColGroupBlock {...col}>
    <Label htmlFor='firstName' {...props}>{label}</Label>
  </FormColGroupBlock>
}
