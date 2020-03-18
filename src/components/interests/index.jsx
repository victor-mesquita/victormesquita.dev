import React from "react"
import { StyledOcticon } from "@primer/components"
import { TriangleLeft } from "@primer/octicons-react"
import { Link } from "gatsby"
import InterestItem from "./InterestItem"
import useThemeContext from "../../hooks/themeContext"

import "./interests.scss"

const Content = ({ interests }) => {
  const { theme } = useThemeContext()

  return (
    <>
      <h2 className={`text-center ${theme.textClass}`}>Meus interesses</h2>
      <p className={`f4 mb-4 text-gray text-center ${theme.textClass}`}>
        Tecnologias na qual dedico meu tempo.
      </p>

      <div className="mx-auto project_items">
        <div className="gutter-condensed d-flex flex-wrap">
          {interests &&
            interests.map(interest => (
              <div key={interest.name} className="col-12 col-md-4 mb-3">
                <InterestItem
                  name={interest.name}
                  imageUrl={interest.imageUrl}
                  skillScores={interest.skillScores}
                ></InterestItem>
              </div>
            ))}
        </div>
        <Link
          to="/"
          className="btn btn-outline btn-block mt-4 rounded-2 border"
        >
          <StyledOcticon icon={TriangleLeft}></StyledOcticon>
          <span className="ml-2">Meus projetos</span>
        </Link>
      </div>
    </>
  )
}

export default Content
