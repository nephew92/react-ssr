import { Form } from "reactstrap";

import BlocksComponent from "@/theme/components/Block";
import { FormStoreProvider, useFormStore } from "@/theme/hooks/use-form";

function FormBlock(props) {
  const { handleSubmit: useForm, definition } = useFormStore()

  const handleSubmit = useForm()

  return <Form {...props} onSubmit={handleSubmit}>
    <BlocksComponent blocks={definition} />
  </Form>
}

export default function FormProviderBlock(props) {
  return <FormStoreProvider>
    <FormBlock {...props} />
  </FormStoreProvider>
}

FormBlock.defaultProps = {
  className: "registration",
}
