import { Link } from "react-router-dom";

export default function RouteLink({ to, children, className }) {
  return <Link to={to} className={className}>
    {children}
  </Link>
}
