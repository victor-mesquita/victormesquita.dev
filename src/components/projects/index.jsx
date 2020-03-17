import React from "react"
import { Heading, Text, Box, StyledOcticon } from "@primer/components"
import ProjectItem from "./ProjectItem"
import { TriangleRight } from "@primer/octicons-react"
import { Link } from "gatsby"

import "./content.scss"

const Content = ({ projects }) => (
  <>
    <Heading textAlign="center" fontSize={5}>
      Projetos
    </Heading>
    <Text textAlign="center" as="p" color="gray.6" mb="4" className="f4">
      Apps, sites e serviços que ajudei a construir ou evoluir ;)
    </Text>

    <div className="mx-auto project_items">
      <div className="gutter-condensed d-flex flex-wrap">
        {projects &&
          projects.map(project => (
            <Box className="col-12 col-md-12 col-lg-6 col-xl-4 mb-3">
            <ProjectItem
              name={project.name}
              description={project.description}
              stack={project.stack}
              imageUrl={project.imageUrl}
              key={project.name}
            ></ProjectItem>
            </Box>
          ))}
      </div>
      <Link to="/interests" className="btn btn-invisible btn-block mt-4">
        Meus Interesses
        <StyledOcticon icon={TriangleRight} ml={2}></StyledOcticon>
      </Link>
    </div>
  </>
)

export default Content
