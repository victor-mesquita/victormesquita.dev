import React from "react"
import { MarkGithub } from "@primer/octicons-react"
import { StyledOcticon, Link as PrimerLink } from "@primer/components"

import useThemeContext from "../../hooks/themeContext"

export default ({ login }) => {
  const { style, theme } = useThemeContext()

  return (
    <>
      <StyledOcticon
        color={theme.iconColor}
        icon={MarkGithub}
        size={20}
        verticalAlign="middle"
        mr={2}
        ariaLabel="GitHub"
      />
      <PrimerLink
        href={`https://github.com/${login}`}
        color={style === "dark" ? "white" : undefined}
      >
        @{login}
      </PrimerLink>
    </>
  )
}
