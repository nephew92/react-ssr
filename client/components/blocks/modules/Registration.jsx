import { FormProvider } from "../../../../client/components/hooks/use-form";

export default function Registration({ children }) {
  return <div className="registration">
    <FormProvider>
      {children}
    </FormProvider>
  </div>
}
