import React from "react"
import { Mail } from "@primer/octicons-react"
import { StyledOcticon } from "@primer/components"

import useThemeContext from "../../hooks/theme-context"

export default ({ email }) => {
  const { theme } = useThemeContext()

  return (
    <div>
      <StyledOcticon
        color={theme.iconColor}
        icon={Mail}
        size={20}
        verticalAlign="middle"
        ariaLabel="email"
      />
      <a className={`ml-2 ${theme.linkClass}`} href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  )
}
