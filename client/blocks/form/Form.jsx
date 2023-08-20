'use client';

import { FormProvider } from "react-hook-form";
import { Form } from "reactstrap";

import { FormStoreProvider, useFormStore } from "@/client/hooks/form/use-store";
import * as classnames from "classnames";

function FormBlock({ children, className, ...props }) {
  const { handleSubmit, context } = useFormStore()

  className = classnames("registration")

  return <FormProvider {...context}>
    <Form {...props} className={className} onSubmit={handleSubmit}>
      {children}
    </Form>
  </FormProvider>
}

export default function FormProviderBlock({ children, ...props }) {
  return <FormStoreProvider>
    <FormBlock {...props}>
      {children}
    </FormBlock>
  </FormStoreProvider>
}
