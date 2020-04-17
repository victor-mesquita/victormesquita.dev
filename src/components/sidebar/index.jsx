import React from "react"

import useThemeContext from "../../hooks/theme-context"
import Avatar from "./avatar"
import AboutMe from "./about-me"
import LocationComponent from "./location"
import GitHub from "./github"
import Contact from "./contact"
import Hireable from "./hireable"
import SocialMediaItem from "./social-media-item"

import "./style.scss"
import SwitchTheme from "./switch-theme"

const ItemSpacer = props => (
  <div className="d-flex flex-items-center mb-3" {...props}>
    {props.children}
  </div>
)

export default ({
  avatarUrl,
  userName,
  email,
  socialMedias,
  isHireable,
  login,
  location,
  bio,
}) => {
  const { style, setTheme } = useThemeContext()

  function onThemeChange(e) {
    const newStyle = style === "dark" ? "light" : "dark"

    setTheme(newStyle)
  }

  return (
    <>
      <SwitchTheme
        className="change-theme-button"
        onClick={onThemeChange}
      ></SwitchTheme>

      <Avatar avatarUrl={avatarUrl} />
      <AboutMe className="mb-5" userName={userName} bio={bio} />

      <div className="f4">
        <ItemSpacer>
          <GitHub login={login}></GitHub>
        </ItemSpacer>

        {email && (
          <ItemSpacer>
            <Contact email={email}></Contact>
          </ItemSpacer>
        )}

        {location && (
          <ItemSpacer>
            <LocationComponent location={location}></LocationComponent>
          </ItemSpacer>
        )}

        {isHireable && (
          <ItemSpacer>
            <Hireable></Hireable>
          </ItemSpacer>
        )}

        {socialMedias && (
          <ItemSpacer className="d-flex flex-items-center mb-3 flex-justify-center">
            {socialMedias.map(socialNetwork => (
              <SocialMediaItem
                key={socialNetwork.key}
                networkName={socialNetwork.key}
                userName={socialNetwork.name}
              ></SocialMediaItem>
            ))}
          </ItemSpacer>
        )}
      </div>
    </>
  )
}
