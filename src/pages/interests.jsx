import React from "react"
import Layout from "../components/layout"
import Interests from "../components/interests"
import { useStaticQuery, graphql } from "gatsby"
import futureItems from "../data/focus_in_the_future.yml"
import proficiencySkills from "../data/proficiency_graph.yml"
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
      firebase.analytics().logEvent("visited_interests")
    }, [])
  }

  return (
    <Layout user={user}>
      <Interests
        proficiencySkills={proficiencySkills}
        theFutureItems={futureItems}
      ></Interests>
    </Layout>
  )
}
