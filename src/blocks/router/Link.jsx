'use client';

import Link from "next/link";

export default function LinkBlock({ children, to, ...props }) {
  return <Link {...props} href={to}>
    {children}
  </Link>
}
