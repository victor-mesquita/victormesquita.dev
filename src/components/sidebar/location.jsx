import React from "react"
import { Location } from "@primer/octicons-react"
import { StyledOcticon } from "@primer/components"
import useThemeContext from "../../hooks/theme-context"

export default ({ location }) => {
  const { theme } = useThemeContext()

  return (
    <div>
      <StyledOcticon
        color={theme.iconColor}
        icon={Location}
        size={20}
        verticalAlign="middle"
        ariaLabel="Location"
      />
      <span className={`ml-2 ${theme.textClass}`}>
      {location}</span>
    </div>
  )
}
