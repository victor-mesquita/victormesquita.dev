import React from "react"
import { Avatar } from "@primer/components"

export default ({ avatarUrl }) => {
  return (
    <Avatar
      src={avatarUrl}
      alt="user-avatar"
      className="circle mb-3"
      size={200}
      borderRadius={"50%"}
      maxWidth={"150px"}
    />
  )
}
