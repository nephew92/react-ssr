import classnames from "classnames";

export default function FlexBlock({ children, className, ...props }) {
  return <div className={classnames("d-flex", className)} {...props}>
    {children}
  </div>
}
