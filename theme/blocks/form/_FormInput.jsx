import { useFormContext } from "react-hook-form";
import { Input } from "reactstrap";

export default function FormInputBlock({ name, ...props }) {
  const { register } = useFormContext()
  const { ref, ...defaults } = register(name, props)

  return <Input innerRef={ref}
    {...props}
    {...defaults}
  />
}
