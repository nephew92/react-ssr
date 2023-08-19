import { Link } from "react-router-dom";

export default function LinkBlock({ children, ...props }) {
  return <Link {...props}>
    {children}
  </Link>
}
