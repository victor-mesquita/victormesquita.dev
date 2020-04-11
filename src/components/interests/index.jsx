import React from "react"
import { StyledOcticon } from "@primer/components"
import { TriangleLeft } from "@primer/octicons-react"
import { Link } from "gatsby"
import TheFutureList from "./the-future-list"
import ProficiencyGraph from "./proficiency-graph"
import useThemeContext from "../../hooks/themeContext"

import "./interests.scss"

const Content = ({ theFutureItems, proficiencySkills }) => {
  const { theme } = useThemeContext()

  return (
    <>
      <h2 className={`mb-4 text-center ${theme.textClass}`}>Meus interesses</h2>

      <div className="mx-auto project_items">
        <div className="bg-white rounded-2 border border-gray-light d-flex flex-justify-center p-4">
          <div className="d-flex flex-column">
            <div className="text-center h3">Gráfico de proficiência</div>
            <div className="f4 text-center text-gray-light">Minhas habilidades técnicas 📈</div>
            <ProficiencyGraph
              data={proficiencySkills}
              indexBy="name"
              keys={["exp"]}
            ></ProficiencyGraph>
          </div>

          <div className="d-flex flex-column flex-1">
            <div className="text-center h3">Foco no futuro</div>
            <div className="f4 text-center text-gray-light">Estudos tecnológicos em andamento 👨🏻‍💻</div>
            <TheFutureList items={theFutureItems}></TheFutureList>
          </div>
        </div>
        <Link
          to="/"
          className="btn btn-outline mt-4 border"
        >
          <StyledOcticon icon={TriangleLeft}></StyledOcticon>
          <span className="ml-2">Meus projetos</span>
        </Link>
      </div>
    </>
  )
}

export default Content
