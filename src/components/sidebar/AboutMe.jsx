import React from "react"
import useThemeContext from "../../hooks/themeContext"

export default props => {
  const { userName, bio, className } = props
  const { style } = useThemeContext()
  return (
    <div className={`${className}`}>
      <h1 className="lh-condensed mb-1">{userName}</h1>

      <p
        className={`mb-3 f4 text-center ${
          style === "dark" ? "text-white" : "text-gray"
        }`}
      >
        {bio}
      </p>
    </div>
  )
}
