import React, { useEffect } from 'react'
import useThemeContext from '../../hooks/theme-context'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../header'

function Container({ personalData, children, socialMedias }) {
  const { theme, setTheme } = useThemeContext()

  useEffect(() => {
    document.body.style.backgroundColor = theme.background
  }, [theme.background])

  useEffect(() => {
    setTimeout(() => {
      const savedTheme = localStorage.getItem('theme')
      setTheme(savedTheme)
    })
  }, [])

  return (
    <div>
      <Header personalData={personalData}></Header>
      <Helmet title="Victor Mesquita - Fullstack developer" />
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Container
