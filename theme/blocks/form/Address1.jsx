import { Label } from "reactstrap"

import FormColGroupBlock from "./FormColGroup"
import FormInputBlock from "./_FormInput"

export default function FormAddress1Block({ col, label, ...props }) {
  return <FormColGroupBlock {...col}>
    <Label htmlFor='address1'>{label}</Label>
    <FormInputBlock {...props} id='address1' name='address1' />
  </FormColGroupBlock>
}
