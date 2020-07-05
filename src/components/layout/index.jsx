import React, { useEffect } from "react"
import useThemeContext from "../../hooks/theme-context"
import Sidebar from "../../components/sidebar"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function Container({ user, children, socialMedias }) {
  const { style, theme, setTheme } = useThemeContext()

  useEffect(() => {
    document.body.style.backgroundColor = theme.background
  }, [theme.background])

  useEffect(() => {
    setTimeout(() => {
      const savedTheme = localStorage.getItem("theme")
      setTheme(savedTheme)
    })
  }, [])

  return (
    <div
      className={`d-md-flex min-height-full ${style !== "dark" &&
        "border-md-bottom"}`}
    >
      <Helmet title="Victor Mesquita - Fullstack developer" />

      <Sidebar
        avatarUrl={user.avatarUrl}
        userName={user.name}
        bio={user.bio}
        email={user.email}
        login={user.login}
        location={user.location}
        isHireable={user.isHireable}
        socialMedias={socialMedias}
      ></Sidebar>
      <div className="col-md-7 col-lg-8 col-xl-9 px-4 py-8 py-md-6 px-lg-7 border-top border-md-top-0">
        {children}
      </div>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Container
