import React from 'react'
import PropType from 'prop-types'
import './content.scss'

const Tab = ({ title, onClick }) => {
  return (
    <span
      onClick={onClick}
      className="flex-1 py-2 px-5 rounded mr-2 bg-purple-100 text-purple-700 text-center font-semibold cursor-pointer"
    >
      {title}
    </span>
  )
}

Tab.propTypes = {
  onClick: PropType.func.isRequired,
  title: PropType.string.isRequired,
}

export default Tab
