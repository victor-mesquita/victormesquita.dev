import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"
import { useStaticQuery, graphql } from "gatsby"
import socialMedias from "../data/social_media.yml"
import projects from "../data/projects.yml"

import "../../sass/style.scss"

export default () => {

  const {
    github: { viewer: user },
  } = useStaticQuery(
    graphql`
      query {
        github {
          viewer {
            name
            email
            bio
            login
            url
            avatarUrl
            isHireable
            location
          }
        }
      }
    `
  )

  return (
    <Layout user={user}>
      <Projects projects={projects} socialMedias={socialMedias}></Projects>
    </Layout>
  )
}
