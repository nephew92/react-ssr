import ColBlock from "../bootstrap/Col";
import LinkBlock from "../router/Link";

export default function FormContinueBlock({ redirect, colProps, ...props }) {
  return <ColBlock {...colProps}>
    <LinkBlock {...props} to={redirect} />
  </ColBlock>
}
