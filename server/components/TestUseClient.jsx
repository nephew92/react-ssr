'use client';

import { useState } from "react"

export default function TestUseClient() {
  console.log('renderizou');
  useState(() => {
    console.log('montou');
  }, [])
  return <div>
    componente com hook
  </div>
}
