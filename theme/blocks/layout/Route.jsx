import { Route } from "react-router-dom";

export default function RouteBlock({ path, children }) {
  return <Route path={path}>
    {children}
  </Route>
}
