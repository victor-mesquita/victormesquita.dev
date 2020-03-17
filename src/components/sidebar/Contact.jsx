import React from "react"
import { Mail } from "@primer/octicons-react"
import { StyledOcticon } from "@primer/components"

import useThemeContext from "../../hooks/themeContext"

export default ({ email }) => {
  const { style, theme } = useThemeContext()

  return (
    <>
      <StyledOcticon
        color={theme.iconColor}
        icon={Mail}
        size={20}
        verticalAlign="middle"
        ariaLabel="email"
      />
      <a
        className="ml-2"
        href={`mailto:${email}`}
        color={style === "dark" ? "white" : undefined}
      >
        {email}
      </a>
    </>
  )
}
