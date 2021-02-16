import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../components/section'
import sectionsData from '../data/sections.yml'
import contactData from '../data/contact.yml'

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
        <ul className="mt-10">
          {contactData.map(contact => (
            <li className="flex items-center mb-4">
              <img  className="h-8 mr-4" src={contact.icon} />
              <a target="_blank" className="text-2xl text-gray-600" href={contact.url}>{contact.description}</a>
            </li>
          ))}
        </ul>
      </Section>
    </Layout>
  )
}
