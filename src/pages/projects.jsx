import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../components/section'
import sectionsData from '../data/sections.yml'

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
    <Layout personalData={user}>
      <Section
        title={sectionsData.projects.title}
        icon={sectionsData.projects.icon}
        subTitle={sectionsData.projects.subTitle}
      >
        <div>EM CONSTRUÇÃO</div>
        </Section>

    </Layout>
  )
}
