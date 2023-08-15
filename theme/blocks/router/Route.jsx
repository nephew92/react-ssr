import { Route } from "react-router-dom";

export default function RouteBlock({ children, ...props }) {
  return <Route {...props}>
    {children}
  </Route>
}
