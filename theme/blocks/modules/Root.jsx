export default function RootBlock({ children, ...props }) {
  return <div {...props}>
    {children}
  </div>
}
