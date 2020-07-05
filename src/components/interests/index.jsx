import React from "react"
import { StyledOcticon } from "@primer/components"
import { ChevronLeft } from "@primer/octicons-react"
import { Link } from "gatsby"
import TheFutureList from "./the-future-list"
import ProficiencyGraph from "./proficiency-graph"
import useThemeContext from "../../hooks/theme-context"

import "./interests.scss"

const Content = ({ theFutureItems, proficiencySkills }) => {
  const { style, theme } = useThemeContext()

  return (
    <>
      <h2 className={`mb-4 text-center ${theme.textClass}`}>Meus interesses</h2>

      <div className="mx-auto project_items">
        <div className={`bg-white rounded-2 ${style === "dark" ? "bg-gray-dark" : "border border-gray-light"} d-flex flex-wrap flex-justify-center p-4`}>
          <div className="d-flex flex-column col-12 col-md-5">
            <div className={`text-center h3 ${style === "dark" ? "text-white" : ""}`}>Gráfico de proficiência</div>
            <div className="f4 text-center text-gray-light">
              Minhas habilidades técnicas 📈
            </div>
            <div
              className="mx-auto mb-4 width-full"
              style={{ height: "282px" }}
            >
              <ProficiencyGraph
                data={proficiencySkills}
                indexBy="name"
                keys={["exp"]}
              ></ProficiencyGraph>
            </div>
          </div>

          <div className="d-flex flex-column col-12 col-md-7">
            <div className={`text-center h3 ${style === "dark" ? "text-white" : ""}`}>Foco no futuro</div>
            <div className="f4 text-center text-gray-light">
              Estudos tecnológicos em andamento 👨🏻‍💻
            </div>
            <TheFutureList items={theFutureItems}></TheFutureList>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
