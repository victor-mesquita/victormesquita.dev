import React, { useReducer, createContext } from "react"
import { theme as primerTheme } from "@primer/components"

// extend primer theme
export const themes = {
  light: {
    ...primerTheme,
    background: "#ffffff",
    iconColor: "#586069",
    textClass: "text-gray",
    linkClass: null,
    invertedStyle: "dark",
    buttonBackground: null
  },
  dark: {
    ...primerTheme,
    background: "#2f363d",
    iconColor: "#ffffff",
    textClass: "text-white",
    linkClass: "text-white",
    invertedStyle: "light",
    buttonBackground: "#1f2123"
  },
  flexa: {
    columns: 24,
    gutter: {
      xs: 2,
      sm: 2,
      md: 4,
      lg: 4,
    },
    breakpoints: {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1280px",
    },
  },
}

const windowGlobal = typeof window !== "undefined" && window
const defaultTheme = "light"

const initialState = {
  style: defaultTheme,
  theme: themes[defaultTheme],
}

const reducer = (state, { value, type }) => {
  const themeValue = value || defaultTheme
  windowGlobal.localStorage &&
    windowGlobal.localStorage.setItem("theme", themeValue)

  switch (type) {
    case "TOGGLE_THEME":
      return state.style === "light"
        ? { theme: themes.dark, style: "dark" }
        : { theme: themes.light, style: "light" }
    case "CHANGE_THEME":
      return { theme: themes[themeValue], style: themeValue }
    default:
      return state
  }
}

const ThemeContext = createContext({
  state: initialState,
  dispatch: () => {},
})

function ThemeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeContextProvider }
