'use client';

import { Route, Routes } from "react-router-dom";

export default function RouterBlock({ children }) {
  return <Routes>
    {children.map(({ element, path }, idx) => <Route
      key={idx}
      path={path}
      element={element}
    />)}
  </Routes>
}
