import React from "react"
import { Location } from "@primer/octicons-react"
import { StyledOcticon } from "@primer/components"
import useThemeContext from "../../hooks/themeContext"

export default ({ location }) => {
  const { theme } = useThemeContext()

  return (
    <>
      <StyledOcticon
        color={theme.iconColor}
        icon={Location}
        size={20}
        verticalAlign="middle"
        mr={2}
        ariaLabel="Location"
      />
      {location}
    </>
  )
}
