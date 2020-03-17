import React from "react"
import { Mail } from "@primer/octicons-react"
import { StyledOcticon, Box, Link as PrimerLink } from "@primer/components"

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
        mr={2}
        ariaLabel="email"
      />
      <PrimerLink
        href={`mailto:${email}`}
        color={style === "dark" ? "white" : undefined}
      >
        {email}
      </PrimerLink>
    </>
  )
}
