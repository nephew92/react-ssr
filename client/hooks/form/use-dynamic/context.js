
import { createContext, useContext } from "react";

const DynamicContext = createContext({ name: '' })
export const useDynamicContext = () => useContext(DynamicContext)
export const DynamicContextProvider = DynamicContext.Provider
