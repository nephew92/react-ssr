'use client';

import { Outlet, Route, Routes } from "react-router-dom";

export default function RouterBlock({ children }) {
  return <Routes>
    {children.map(route)}
  </Routes>
}

export const OutletBLock = Outlet

function route({ path, children, routes }, idx) {
  return <Route
    key={idx}
    path={path}
    element={children}
  >
    {routes?.map(route)}
  </Route>
}
