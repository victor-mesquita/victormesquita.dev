import React from "react"
import { Link } from "gatsby"

import useThemeContext from "../../hooks/theme-context"

export default ({ name, page }) => {
  const { theme } = useThemeContext()

  return (
    <Link className={`${theme.textClass} px-3 py-2 menu-item`} to={page}>
      <span>{name}</span>
      <img className="arrow-icon" src="/img/next.svg"></img>
    </Link>
  )
}
