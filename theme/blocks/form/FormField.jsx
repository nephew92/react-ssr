import ColBlock from "../bootstrap/Col";
import FormGroupBlock from "../bootstrap/FormGroup";

import FormInputBlock from "./FormInput";

export default function FormFieldBlock({ name, colProps, formGroupProps, inputProps }) {
  return <ColBlock {...colProps}>
    <FormGroupBlock {...formGroupProps}>
      <FormInputBlock {...inputProps} name={name} />
    </FormGroupBlock>
  </ColBlock>
}

FormFieldBlock.defaultProps = {
  colProps: {},
  formGroupProps: {},
  inputProps: {},
}
