import React, { useState } from 'react'
import PropType from 'prop-types'
import './content.scss'

const Tabs = props => {
  const [activeIndex, setActiveIndex] = useState(0)

  function ChildrenTabData({ children }) {
    return children[activeIndex].props.children
  }

  const onTabClick = index => {
    setActiveIndex(index)
  }

  const cloneTabElement = (tab, index = 0) => {
    return React.cloneElement(tab, {
      onClick: () => onTabClick(index),
      key: index,
      tabIndex: index,
      isActive: index === activeIndex,
    })
  }

  const renderChildrenTabs = ({ children }) => {
    if (!Array.isArray(children)) {
      return cloneTabElement(children)
    }

    return children.map((tab, index) =>
      cloneTabElement(tab, index)
    )
  }

  return (
    <div className="flex w-full flex-col">
      <ChildrenTabData {...props}></ChildrenTabData>

      <div className="flex flex-col gap-y-2 md:flex-row">{renderChildrenTabs(props)}</div>
    </div>
  )
}

Tabs.propTypes = {
  children: PropType.array.isRequired
}

export default Tabs
