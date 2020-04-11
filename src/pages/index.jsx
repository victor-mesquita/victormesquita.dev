import React, { useEffect } from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"
import { useStaticQuery, graphql } from "gatsby"
import socialMedias from "../data/social_media.yml"
import projects from "../data/projects.yml"
import useThemeContext from "../hooks/themeContext"

import "../../sass/style.scss"

export default () => {
  const themeContext = useThemeContext()

  useEffect(() => {
    const saved_theme = localStorage.getItem("theme")
    themeContext.setTheme(saved_theme)
  }, [])

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
