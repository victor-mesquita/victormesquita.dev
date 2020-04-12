import React from "react"
import { ResponsiveRadar } from "@nivo/radar"
import useThemeContext from "../../hooks/themeContext"

export default ({ data, keys, indexBy }) => {
  const { style, theme } = useThemeContext()

  const nivoTheme = {
    axis: {
      ticks: {
        text: {
          fill: style == "dark" ? "#ffffff" : "#2f363d",
        },
      },
    },
  }

  return (
    <ResponsiveRadar
      data={data}
      keys={keys}
      indexBy={indexBy}
      maxValue="auto"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      curve="linearClosed"
      borderWidth={2}
      borderColor={{ from: "color" }}
      gridLevels={10}
      gridShape="circular"
      gridLabelOffset={36}
      enableDots={true}
      dotSize={10}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      dotBorderColor={{ from: "color" }}
      enableDotLabel={false}
      dotLabel="value"
      dotLabelYOffset={-12}
      colors={{ scheme: style === "dark" ? "paired" : "pastel1" }}
      fillOpacity={0.25}
      blendMode="normal"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      isInteractive={false}
      theme={nivoTheme}
    />
  )
}
