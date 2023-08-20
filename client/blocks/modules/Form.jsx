'use client';

import { FormProvider } from "react-hook-form";
import { Form } from "reactstrap";

import * as classnames from "classnames";

import { FormStoreProvider, useFormStore } from "@/client/hooks/form/use-store";

function FormBlock({ children, className, ...props }) {
  const { handleSubmit, context } = useFormStore()

  className = classnames("registration", className)

  return <FormProvider {...context}>
    <Form {...props} className={className} onSubmit={handleSubmit}>
      {children}
    </Form>
  </FormProvider>
}

export default function FormBlockProvider({ children, ...props }) {
  return <FormStoreProvider>
    <FormBlock {...props}>
      {children}
    </FormBlock>
  </FormStoreProvider>
}
