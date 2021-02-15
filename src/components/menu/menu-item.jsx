import React from 'react'
import { Link } from 'gatsby'

import './content.scss'

const MenuItem = ({ title, color, path }) => {
  return (
    <Link
      className="cursor-pointer px-4 py-2 mr-2 text-center w-full"
      activeClassName="border leading-6 font-medium rounded-md text-purple-800 bg-white"
      activeStyle={{ color: color, borderColor: color }}
      to={path}
      color="gray-600"
    >
      {title}
    </Link>
  )
}

MenuItem.propTypes = {}

export default MenuItem
