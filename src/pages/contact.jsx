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
        title={sectionsData.contact.title}
        icon={sectionsData.contact.icon}
        subTitle={sectionsData.contact.subTitle}
        iconSize="h-10"
      >
        <div className="bold">EM CONSTRUÇÃO</div>
      </Section>
    </Layout>
  )
}
