import React from "react"

import useThemeContext from "../../hooks/theme-context"
import Avatar from "./avatar"
import AboutMe from "./about-me"
import LocationComponent from "./location"
import GitHub from "./github-user"
import Contact from "./contact"
import Hireable from "./hireable"
import MenuItem from "./menu-item"

import "./style.scss"
import SwitchTheme from "./switch-theme"

export default ({
  avatarUrl,
  userName,
  email,
  menus,
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
    <div
      className={`sidebar ${style} col-md-5 col-lg-4 col-xl-3 px-4 px-md-6 px-lg-7 py-6`}
    >
      <SwitchTheme
        className="change-theme-button"
        onClick={onThemeChange}
      ></SwitchTheme>

      <Avatar avatarUrl={avatarUrl} />

      <AboutMe className="mb-5" userName={userName} bio={bio} />

      <div className="social-content">
        <GitHub login={login}></GitHub>

        {email && <Contact email={email}></Contact>}

        {location && (
          <LocationComponent location={location}></LocationComponent>
        )}

        {isHireable && <Hireable></Hireable>}
      </div>

      <div className="divider"></div>

      <div className="custom-menu">
        <MenuItem name="Projetos" page="/"></MenuItem>
        <MenuItem name="Interesses" page="/interests"></MenuItem>
      </div>
    </div>
  )
}
