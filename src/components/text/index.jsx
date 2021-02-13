import React from 'react'
import PropTypes from 'prop-types'

function Text(props) {
  let text = props.value.toString().replace(/[^\\]\\n/g, '\n')
  text = text.replace(/tag\[/g, "<span class='border-b-4 border-blue-400'>")
  text = text.replace(/\]tag/g, '</span>')

  return (
    <div
      className={
        classBinding(props) + ` whitespace-pre-wrap ${props.className}`
      }
      dangerouslySetInnerHTML={{ __html: text }}
    ></div>
  )
}

function classBinding(props) {
  const classes = {
    [`text-${props.size}`]: !!props.size,
    [`font-${props.weight}`]: !!props.weight,
    [`text-${props.color}`]: !!props.color,
  }

  return Object.keys(classes)
    .filter(key => classes[key])
    .join(' ')
}

Text.defaultProps = {
  size: 'sm',
  weight: 'normal',
}

Text.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'])
    .isRequired,
  weight: PropTypes.oneOf(['light', 'normal', 'medium', 'semibold', 'bold']),
  color: PropTypes.string,
}

export default Text
