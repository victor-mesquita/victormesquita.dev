import React from "react"
import { Heading, Text, Flex, Box, StyledOcticon } from "@primer/components"
import { TriangleLeft } from "@primer/octicons-react"
import { Link } from "gatsby"
import InterestItem from "./InterestItem"

import "./interests.scss"

const Content = ({ interests }) => (
  <>
    <Heading textAlign="center" fontSize={5}>
      Meus interesses
    </Heading>
    <Text textAlign="center" as="p" color="gray.6" mb="4" className="f4">
      Tecnologias na qual dedico meu tempo.
    </Text>

    <div className="mx-auto project_items">
      <Flex className="gutter-condensed" flexWrap="wrap">
        {interests &&
          interests.map(interest => (
            <div  key={interest.name} className="col-12 col-md-4 mb-3">
              <InterestItem
                name={interest.name}
                imageUrl={interest.imageUrl}
                skillScores={interest.skillScores}
              ></InterestItem>
            </div>
          ))}
      </Flex>
      <Link to="/" className="btn btn-invisible btn-block mt-4 rounded-2">
        <StyledOcticon icon={TriangleLeft} mr={2}></StyledOcticon>
        Meus projetos
      </Link>
    </div>
  </>
)

export default Content
