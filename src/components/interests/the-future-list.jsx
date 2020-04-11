import React from "react"
import TheFutureItem from "./the-future-item"

export default ({ items }) => {
  return (
    <div className="mt-4 m-md-4 height-full rounded-2 p-3 p-md-6 border border-gray-light bg-gray-light">
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
