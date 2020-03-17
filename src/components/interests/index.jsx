import React from "react"
import { StyledOcticon } from "@primer/components"
import { TriangleLeft } from "@primer/octicons-react"
import { Link } from "gatsby"
import InterestItem from "./InterestItem"

import "./interests.scss"

const Content = ({ interests }) => (
  <>
    <h2 className="text-center">Meus interesses</h2>

    <p className="text-gray f4 mb-4 text-center">
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
      <Link to="/" className="btn btn-invisible btn-block mt-4 rounded-2">
        <StyledOcticon icon={TriangleLeft} mr={2}></StyledOcticon>
        Meus projetos
      </Link>
    </div>
  </>
)

export default Content
