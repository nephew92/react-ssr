'use client';

import ColBlock from "../bootstrap/Col";
import FormGroupBlock from "../bootstrap/FormGroup";

export default function FormColGroupBlock({ children, ...props }) {
  return <ColBlock {...props}>
    <FormGroupBlock>
      {children}
    </FormGroupBlock>
  </ColBlock>
}
