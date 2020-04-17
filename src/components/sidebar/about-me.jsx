import React from "react"
import useThemeContext from "../../hooks/theme-context"

export default props => {
  const { userName, bio, className } = props
  const { theme } = useThemeContext()

  return (
    <div className={`${className}`}>
      <h1 className={`lh-condensed mb-1 ${theme.textClass}`}>{userName}</h1>
      <p className={`mb-3 f4 text-center ${theme.textClass}`}>{bio}</p>
    </div>
  )
}
