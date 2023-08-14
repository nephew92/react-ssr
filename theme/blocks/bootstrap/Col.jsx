import { Col } from "reactstrap";

export default function ColBlock({ children, responsive, ...props }) {
  const sizes = useResponsiveSizes(responsive)

  return <Col {...props} {...sizes}>
    {children}
  </Col>
}

function useResponsiveSizes(initial) {
  if (!initial || isNaN(initial)) {
    return {}
  }
  initial = initial === true || isNaN(initial) ? 6 : +initial
  const max = 12
  const steps = 3
  const diff = max - initial
  const step = Math.floor(diff / steps)

  const sizes = {
    xs: max,
    md: initial + (step * 2),
    lg: initial + (step * 1),
    xl: initial,
  }

  return sizes
}
