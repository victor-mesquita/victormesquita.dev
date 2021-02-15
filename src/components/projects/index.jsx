import React from 'react'
import ProjectItem from './project-item'
import useThemeContext from '../../hooks/theme-context'

import './content.scss'

const Projects = ({ projects }) => {
  const { theme } = useThemeContext()

  return (
    <div className="flex flex-col w-full mt-10 md:flex-row flex-wrap justify-center">
      {projects.map((project, index) => (
        <ProjectItem key={index} {...project}></ProjectItem>
      ))}
    </div>
  )
}

export default Projects
