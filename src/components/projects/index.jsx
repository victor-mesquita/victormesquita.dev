import React from "react"
import ProjectItem from "./project-item"
import useThemeContext from "../../hooks/theme-context"

import "./content.scss"

const Content = ({ projects }) => {
  const { theme } = useThemeContext()

  return (
    <>
      <h2 className={`text-center ${theme.textClass}`}>Projetos</h2>
      <p className={`f4 mb-4 text-gray text-center ${theme.textClass}`}>
        Veja um pouco sobre cada projeto em que tive o prazer de fazer parte.
      </p>

      <div className="mx-auto project_items">
        <div className="gutter-condensed d-flex flex-wrap">
          {projects &&
            projects.map(project => (
              <div className="col-12 col-md-12 col-lg-6 mb-3">
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
      </div>
    </>
  )
}

export default Content