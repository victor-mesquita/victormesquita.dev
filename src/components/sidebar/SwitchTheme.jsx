import React from "react"
import useThemeContext from "../../hooks/themeContext"

export default props => {
  const { onClick, className } = props
  const { style, theme } = useThemeContext()


  return (
    <button onClick={onClick} className={`btn-octicon ${className}`} type="button">
      <img
        src={`/img/${theme.invertedStyle}.svg`}
        style={{ filter: `invert(${style === "dark" ? 1 : 0})` }}
        alt="Trocar tema"
      ></img>
    </button>
  )
}
