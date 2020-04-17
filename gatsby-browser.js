import React from 'react'
import { ThemeContextProvider } from "./src/theme-context"
import "firebase/analytics"

export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
);