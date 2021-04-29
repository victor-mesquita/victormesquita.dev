import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import firebase from 'gatsby-plugin-firebase'
import Section from '../components/section'
import Timeline from '../components/timeline'
import sectionsData from '../data/sections.yml'
import timelineItems from '../data/timeline.yml'

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

  if (process.env.NODE_ENV !== 'development') {
    React.useEffect(() => {
      firebase.analytics().logEvent('visited_index')
    }, [])
  }

  return (
    <Layout personalData={user}>
      <>
        <Section
          title={sectionsData.aboutMe.title}
          icon={sectionsData.aboutMe.icon}
          subTitle={sectionsData.aboutMe.subTitle}
        />

        <Section
          title={sectionsData.timeline.title}
          icon={sectionsData.timeline.icon}
          subTitle={sectionsData.timeline.subTitle}
        >
          //<Timeline timelineItems={timelineItems}></Timeline>
        </Section>
      </>
    </Layout>
  )
}
