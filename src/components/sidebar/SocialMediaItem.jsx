import React from "react"
import { Location } from "@primer/octicons-react"
import { StyledOcticon, Link } from "@primer/components"
import useThemeContext from "../../hooks/themeContext"
import socialMediaData from "../../data/social_media_data.yml"

export default ({ networkName, userName }) => {
  const { theme } = useThemeContext()
  const socialNetwork = socialMediaData[networkName]

  return (
    <div className="mb-3 mr-3">
      <Link  href={`${socialNetwork.profileUrlPrefix}${userName}`}>
        <div className="tooltipped tooltipped-se"  aria-label={`${networkName}: ${userName}`} dangerouslySetInnerHTML={{ __html: socialNetwork.iconSvg }} />
        <span className="d-none">{networkName}</span>
      </Link>
    </div>
  )
}
