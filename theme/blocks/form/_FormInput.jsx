import { useMemo } from "react";
import { Input } from "reactstrap";

import { useFormStore } from "@/theme/hooks/use-form";

export default function FormInputBlock({ name, disabled, max, min, pattern, required, ...props }) {
  const { context: { register, getValues } } = useFormStore()
  const defaults = useMemo(() => register(name, { disabled, max, min, pattern, required }), [disabled, max, min, name, pattern, register, required])

  // useEffect(() => {
  // setValue(value)
  // }, [value, setValue])

  return <Input
    {...props}
    {...defaults}
    defaultValue={getValues(name)}
  />
}
