import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
import pointImage from '../../../static/img/point.svg'
import Menu from '../menu'
import menuData from '../../data/menu.yml'

function Header({ personalData }) {
  return (
    <div className="h-96 border-b border-gray-200 flex">
      <BackgroundPattern sizeX="315" sizeY="384"></BackgroundPattern>
      <UserProfileContainer>
        <UserProfilePicture
          avatarUrl={personalData.avatarUrl}
          userName={personalData.name}
        ></UserProfilePicture>

        <UserProfileData {...personalData}></UserProfileData>
        <Menu menuItems={menuData}></Menu>
      </UserProfileContainer>
    </div>
  )
}

function BackgroundPattern({ sizeX, sizeY }) {
  const circleSpace = 16
  const amoutInXAxis = Math.ceil(sizeX / circleSpace)
  const amoutInYAxis = Math.ceil(sizeY / circleSpace)

  return (
    <div className="flex-col gap-y-3 hidden md:flex">
      {[...Array(amoutInYAxis)].map((yPosition, yIndex) => (
        <div className="flex gap-x-3" key={yIndex}>
          {[...Array(amoutInXAxis)].map((xPosition, xIndex) => (
            <div
              key={xIndex}
              className="rounded-full h-1 w-1 bg-gray-200"
            ></div>
          ))}
        </div>
      ))}
    </div>
  )
}

function UserProfileContainer({ children }) {
  return (
    <div className="flex-col flex gap-x-3 h-full items-center justify-center flex-1 md:flex-row md:-ml-16 md:justify-start">
      {children}
    </div>
  )
}

function UserProfilePicture({ avatarUrl, userName }) {
  return (
    <img
      className="rounded-full h-36"
      src={avatarUrl}
      alt={`foto de ${userName}`}
    ></img>
  )
}

function UserProfileData({ name, bio, location }) {
  return (
    <div className="flex flex-col flex-1 justify-center items-center md:items-start">
      <Text value={name} size="3xl" weight="semibold" color="gray-600"></Text>

      <Text size="md" value={bio} color="gray-600"></Text>

      <div className="flex gap-x-1 mt-3">
        <img className="h-5" src={pointImage} alt="Minha localidade" />
        <Text size="sm" value={location} color="gray-600"></Text>
      </div>
    </div>
  )
}

Header.propTypes = {
  personalData: PropTypes.object.isRequired,
}

export default Header
