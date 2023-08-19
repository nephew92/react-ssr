import { Label } from "reactstrap"

import FormColGroupBlock from "./FormColGroup"
import FormInputBlock from "./_FormInput"

export default function FormAddress2Block({ col, label, ...props }) {
  return <FormColGroupBlock {...col}>
    <Label htmlFor='address2'>{label}</Label>
    <FormInputBlock {...props} id='address2' name='address2' />
  </FormColGroupBlock>
}
