import { FormProvider } from "react-hook-form";
import { Form } from "reactstrap";

import BlocksComponent from "@/theme/components/Block";
import { FormStoreProvider, useFormStore } from "@/theme/hooks/form/use-store";

function FormBlock(props) {
  const { handleSubmit, context, definition } = useFormStore()

  return <FormProvider {...context}>
    <Form {...props} onSubmit={handleSubmit}>
      <BlocksComponent blocks={definition} />
    </Form>
  </FormProvider>
}

export default function FormProviderBlock(props) {
  return <FormStoreProvider>
    <FormBlock {...props} />
  </FormStoreProvider>
}

FormBlock.defaultProps = {
  className: "registration",
}
