import React from "react"
import { MarkGithub } from "@primer/octicons-react"
import { StyledOcticon } from "@primer/components"

import useThemeContext from "../../hooks/themeContext"

export default ({ login }) => {
  const { theme } = useThemeContext()

  return (
    <>
      <StyledOcticon
        color={theme.iconColor}
        icon={MarkGithub}
        size={20}
        verticalAlign="middle"
        ariaLabel="GitHub"
      />
      <a
        className={`ml-2 ${theme.linkClass}`}
        href={`https://github.com/${login}`}
      >
        @{login}
      </a>
    </>
  )
}
