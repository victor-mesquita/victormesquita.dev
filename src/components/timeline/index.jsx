import React from 'react'
import TimelineItem from './timeline-item'
import TimelineSeparator from './timeline-separator'

import './content.scss'

const Timeline = ({ timelineItems }) => {
  return (
    <div className="flex flex-col items-start p-10 ml-24 md:ml-52">
      {timelineItems.map((timeline, index) => {
        const isLastOne = index === timelineItems.length - 1
        const shouldHideClass = isLastOne ? 'hidden' : ''

        return (
          <div key={index}>
            <TimelineItem {...timeline}></TimelineItem>
            <TimelineSeparator
              className={`ml-6 ${shouldHideClass}`}
            ></TimelineSeparator>
          </div>
        )
      })}
    </div>
  )
}

Timeline.propTypes = {}

export default Timeline
