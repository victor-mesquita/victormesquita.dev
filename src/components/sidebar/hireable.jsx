import React from "react"
import { BorderBox } from "@primer/components"

export default () => {
  return (
    <div>
      <BorderBox
        display={"inline-block"}
        borderRadius={2}
        bg={"green.5"}
        py={1}
        px={2}
        title="Contratar"
        border={0}
        color="white"
        marginBottom="5"
      >
        <span className="f5 rounded-2">
          Buscando oportunidades
          <span role="img" aria-label="Buscando oportunidade">
            🙏🏻
          </span>
        </span>
      </BorderBox>
    </div>
  )
}
