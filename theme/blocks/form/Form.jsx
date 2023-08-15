import { Form } from "reactstrap";

import { FormProvider, useFormStore } from "@Theme/hooks/use-form";

function FormBlock({ children, ...props }) {
  const { handleSubmit: useForm } = useFormStore()

  const handleSubmit = useForm()

  return <Form {...props} onSubmit={handleSubmit}>
    {children}
  </Form>
}

export default function FormProviderBlock({ children, ...props }) {
  return <FormProvider>
    <FormBlock {...props}>
      {children}
    </FormBlock>
  </FormProvider>
}

FormBlock.defaultProps = {
  className: "registration",
}
