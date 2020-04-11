import React from "react"
import TheFutureItem from "./the-future-item"

export default ({ items }) => {
  return (
    <div className="m-4 height-full rounded-2 p-6 border border-gray-light bg-gray-light">
      <ul className="list-style-none">
        {items &&
          items.map(item => (
            <TheFutureItem
              key={item.description}
              description={item.description}
              percentage={item.percentage}
            ></TheFutureItem>
          ))}
      </ul>
    </div>
  )
}
