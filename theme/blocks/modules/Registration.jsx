import { FormProvider } from "@Theme/hooks/use-form";

export default function Registration({ children }) {
  return <div className="registration">
    <FormProvider>
      {children}
    </FormProvider>
  </div>
}
