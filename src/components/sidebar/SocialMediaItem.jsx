import React from "react"
import socialMediaData from "../../data/social_media_data.yml"

export default ({ networkName, userName }) => {
  const socialNetwork = socialMediaData[networkName]


  return (
    <div className="mb-3 mr-3">
      <a href={`${socialNetwork.profileUrlPrefix}${userName}`}>
        <div
          className="tooltipped tooltipped-se"
          aria-label={`${networkName}: ${userName}`}
          dangerouslySetInnerHTML={{ __html: socialNetwork.iconSvg }}
        />
        <span className="d-none">{networkName}</span>
      </a>
    </div>
  )
}
