import React from "react"
import { Heading, Text } from "@primer/components"

import useThemeContext from "../../hooks/themeContext"

export default props => {
  const { userName, bio, className } = props
  const { style } = useThemeContext()
  return (
    <div className={`${className}`}>
      <Heading
        color={style === "dark" ? "white" : undefined}
        mb={2}
        lineHeight={"condensed"}
      >
        {userName}
      </Heading>

      <Text
        as={"p"}
        mb={3}
        fontSize={2}
        color={style === "dark" ? "white" : "gray.5"}
        textAlign="center"
      >
        {bio}
      </Text>
    </div>
  )
}
