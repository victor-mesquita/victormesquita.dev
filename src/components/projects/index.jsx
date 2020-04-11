import React from "react"
import { StyledOcticon } from "@primer/components"
import ProjectItem from "./ProjectItem"
import { TriangleRight } from "@primer/octicons-react"
import { Link } from "gatsby"
import useThemeContext from "../../hooks/themeContext"

import "./content.scss"

const Content = ({ projects }) => {
  const { theme } = useThemeContext()

  return (
    <>
      <h2 className={`text-center ${theme.textClass}`}>Projetos</h2>
      <p className={`f4 mb-4 text-gray text-center ${theme.textClass}`}>
        Apps, sites e serviços que ajudei a construir ou evoluir ;)
      </p>

      <div className="mx-auto project_items">
        <div className="gutter-condensed d-flex flex-wrap">
          {projects &&
            projects.map(project => (
              <div className="col-12 col-md-12 col-lg-6 col-xl-4 mb-3">
                <ProjectItem
                  name={project.name}
                  description={project.description}
                  stack={project.stack}
                  imageUrl={project.imageUrl}
                  key={project.name}
                ></ProjectItem>
              </div>
            ))}
        </div>
        <Link
          to="/interests"
          className="btn btn-outline mt-2 float-right"
        >
          <span>Veja meus interesses</span>
          <StyledOcticon className="ml-2" icon={TriangleRight}></StyledOcticon>
        </Link>
      </div>
    </>
  )
}

export default Content
