import { Form } from "reactstrap";

import BlocksComponent from "@Theme/components/Block";
import { FormProvider, useFormStore } from "@Theme/hooks/use-form";

function FormBlock({ children, ...props }) {
  const { handleSubmit: useForm, definition } = useFormStore()

  const handleSubmit = useForm()

  return <Form {...props} onSubmit={handleSubmit}>
    <BlocksComponent blocks={definition} />
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
