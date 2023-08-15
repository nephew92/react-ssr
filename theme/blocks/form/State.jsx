import { Label } from "reactstrap"

import FormColGroupBlock from "./FormColGroup"
import FormInputBlock from "./_FormInput"

export default function FormStateBlock({ col, label, ...props }) {
  return <FormColGroupBlock {...col}>
    <Label htmlFor='state'>{label}</Label>
    <FormInputBlock {...props} id='state' name='state' />
  </FormColGroupBlock>
}
