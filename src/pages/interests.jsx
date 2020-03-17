import React from "react"
import Layout from "../components/layout"
import Interests from "../components/interests"
import { useStaticQuery, graphql } from "gatsby"
import interests from "../data/interests.yml"

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
      <Interests interests={interests}></Interests>
    </Layout>
  )
}
