import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"
import { useStaticQuery, graphql } from "gatsby"
import menu from "../data/menu.yml"
import projects from "../data/projects.yml"
import firebase from "gatsby-plugin-firebase"
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

  if (process.env.NODE_ENV !== "development") {
    React.useEffect(() => {
      firebase.analytics().logEvent("visited_index")
    }, [])
  }

  return (
    <Layout user={user}>
      <Projects projects={projects} menu={menu}></Projects>
    </Layout>
  )
}
