'use client';

import { Label } from "reactstrap"

import classnames from "classnames"

import FormColGroupBlock from "./FormColGroup"
import FormInputBlock from "./_FormInput"

import { DynamicProvider, useDynamic } from "@/src/hooks/form/use-dynamic";

function FormAddress1Component({ col: { className, ...col } = {}, label, controls, ...props }) {
  const { name, isVisible } = useDynamic(controls || {})

  className = classnames(className, { 'd-none': !isVisible })

  return <FormColGroupBlock {...col} className={className}>
    <Label htmlFor={name}>{label}</Label>
    <FormInputBlock {...props} id={name} name={name} />
  </FormColGroupBlock>
}

export default function FormAddress1Block(props) {
  return <DynamicProvider name='address1'>
    <FormAddress1Component {...props} />
  </DynamicProvider>
}
