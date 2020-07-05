import React from "react"

export default ({ description, percentage }) => {
  function truncateDescription(description) {
    const MAX_LENGTH = 48

    if (description.length <= MAX_LENGTH) return description

    const truncated_string = description.slice(0, MAX_LENGTH)

    return `${truncated_string}...`
  }

  return (
    <li className="mb-3">
      <div className="d-flex space-beetwen flex-justify-between mb-2">
        <span
          className="f5 tooltipped tooltipped-multiline tooltipped-s"
          aria-label={description}
        >
          {truncateDescription(description)}
        </span>
        <span className="f6 flex-self-end">{percentage}/100%</span>
      </div>
      <span className="Progress Progress--small">
        <span className="bg-blue" style={{ width: `${percentage}%` }}></span>
      </span>
    </li>
  )
}
