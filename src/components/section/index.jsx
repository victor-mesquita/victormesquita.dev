import React from 'react'
import PropType from 'prop-types'
import Text from '../text'
import './content.scss'

const Section = props => {
  return (
    <div className="flex flex-col w-full items-center px-8 py-20 md:px-10">
      <SectionTitle {...props} />
      <Text
        className="max-w-6xl"
        size="lg"
        color="gray-400"
        value={props.subTitle}
      />
      {props.children}
    </div>
  )
}

function SectionTitle({ title, icon, iconSize }) {
  return (
    <div className="flex items-center mb-4">
      <img className={`mr-2 ${iconSize}`} src={icon} alt={`${title}`}></img>
      <Text weight="semibold" color="gray-600" size="4xl" value={title} />
    </div>
  )
}

Section.propTypes = {
  title: PropType.string.isRequired,
  icon: PropType.string,
  subTitle: PropType.string,
  iconSize: PropType.string,
}

Section.defaultProps = {
  iconSize: 'h-7',
}

export default Section
