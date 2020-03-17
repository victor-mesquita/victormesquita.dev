import React from "react"

import useThemeContext from "../../hooks/themeContext"

export default ({ name, imageUrl, skillScores }) => {
  const { style, theme } = useThemeContext()

  return (
    <>
      <div className="github-component d-flex flex-items-center flex-justify-around bg-white p-4 flex-column rounded-2 border border-gray-light">
        <div className="d-flex mb-2">
          <img
            src={imageUrl}
            width="24"
            height="24"
            className="rounded-1 mb-1 mr-2"
            alt={name}
          />
          <div className="text-gray-light">{name}</div>
        </div>
        <div
          className="tooltipped tooltipped-n ml-2 progress-bar-interests"
          aria-label={`skill points: | ${skillScores.conceitos} - conceitos | ${skillScores.padroes} - pradrões | ${skillScores.pratica} - prática`}
        >
          <span className="Progress">
            <span
              className="bg-green"
              style={{ width: `${skillScores.conceitos}%` }}
            ></span>
            <span
              className="bg-blue"
              style={{ width: `${skillScores.padroes}%` }}
            ></span>
            <span
              className="bg-red"
              style={{ width: `${skillScores.pratica}%` }}
            ></span>
          </span>
        </div>
      </div>
    </>
  )
}
