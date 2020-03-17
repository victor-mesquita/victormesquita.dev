import React, { useEffect } from "react"
import useThemeContext from "../../hooks/themeContext"
import Sidebar from "../../components/sidebar"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function Container({ user, children, socialMedias }) {
  const { style, setTheme, theme } = useThemeContext()

  useEffect(() => {
    document.body.style.backgroundColor = theme.background
  }, [theme.background])
  return (
    <div
      className={`d-md-flex min-height-full ${style !== "dark" &&
        "border-md-bottom"}`}
    >
      <Helmet title="Victor Mesquita - Fullstack developer" />

      <div
        className={`flex-self-stretch ${
          style === "dark"
            ? "bg-gray-dark"
            : "border-md-right border-gray-light bg-white"
        } col-md-5 col-lg-4 col-xl-3 px-4 px-md-6 px-lg-7 py-6 d-flex flex-column flex-items-center`}
      >
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
      </div>
      <div
        className="col-md-7 col-lg-8 col-xl-9 px-4 py-6 px-lg-7 border-top border-md-top-0"
        style={{ backgroundColor: style === "dark" ? "#2f363d" : "#fafbfc" }}
      >
        {children}
      </div>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Container
