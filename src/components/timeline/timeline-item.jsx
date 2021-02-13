import React from 'react'
import PropType from 'prop-types'
import Text from '../text'
import './content.scss'

const TimelineItem = ({ emoji, title, date, extraTitle }) => {
  return (
    <div className="flex gap-x-2">
      <Text value={emoji} size="4xl"></Text>
      <div className="flex flex-col">
        <Text value={title} size="xl" color="gray-600" weight="semibold"></Text>

        <div className="flex gap-x-2">
          <Text value={date} size="lg" color="gray-400"></Text>
          <Text value={extraTitle} size="lg" color="gray-400"></Text>
        </div>
      </div>
    </div>
  )
}

TimelineItem.propTypes = {
  emoji: PropType.string.isRequired,
}

export default TimelineItem
