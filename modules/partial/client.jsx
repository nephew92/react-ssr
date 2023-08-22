'use client';

import { Router } from "@/client/router"

export default function PartialModule({ path }) {
  return <Router module='partial' path={path} />
}
