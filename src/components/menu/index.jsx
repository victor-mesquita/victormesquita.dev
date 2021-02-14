import React from 'react'
import MenuItem from './menu-item'

import './content.scss'

const Menu = ({ menuItems }) => {
  return (
    <div className="menu flex md:flex-col flex-1 items-center md:mr-4">
      {menuItems.map((menu, index) => {
        const active = index === 0
        return (
          <MenuItem
            key={`${menu.title}${index}`}
            className="menu-item"
            {...menu}
            active={active}
          ></MenuItem>
        )
      })}
    </div>
  )
}

Menu.propTypes = {}

export default Menu
