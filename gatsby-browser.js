import React from 'react'
import { ThemeContextProvider } from './src/theme-context'
import 'firebase/analytics'
import "./styles/global.css"

export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
)
