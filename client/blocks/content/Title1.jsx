'use client';

export default function Title1Block({ title, ...props }) {
  return <h1 {...props}>
    {title}
  </h1>
}
