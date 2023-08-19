
import { DynamicContextProvider, useDynamicContext } from "./context";
import useVisibility from "./use-visibility";

export function useDynamic({ populate, visibility, validations }) {
  // usePopulate(populate || {})
  const isVisible = useVisibility(visibility || {})
  // useValidations(validations || {})

  const { name } = useDynamicContext()

  return {
    name, isVisible,
  }
}

export function DynamicProvider({ children, name }) {
  return <DynamicContextProvider value={{ name }}>
    {children}
  </DynamicContextProvider>
}
