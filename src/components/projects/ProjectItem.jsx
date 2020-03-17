import React from "react"
import { Details } from "@primer/components"

import useThemeContext from "../../hooks/themeContext"

export default ({ name, description, imageUrl, stack }) => {
  const { style, theme } = useThemeContext()

  function NoImageProject() {
    return (
      <div className="bg-blue-light f4 text-gray-light text-bold rounded-1 flex-shrink-0 text-center mx-auto mb-3 no_image_project">
        #
      </div>
    )
  }

  return (
    <>
      <div className="github-component border border-gray-light rounded-1 bg-white p-4">
        <div className="d-flex flex-column flex-items-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              title={name}
              width="64"
              height="64"
              className="rounded-1 mb-3"
            ></img>
          ) : (
            <NoImageProject />
          )}

          <p className="f3">{name}</p>
          <Details overlay={true} className="width-full stack_button">
            <summary
              className="btn btn-outline btn-block mb-2"
              aria-haspopup="dialog"
            >
              Ver stack
            </summary>

            <div className="Box Box--overlay anim-fade-in fast stack__body width-full">
              <div className="Box-body overflow-auto">
                <p>{description}</p>
              </div>
              <ul>
                {stack.map(tech => (
                  <li key={tech.name} className="Box-row border-bottom">
                    <div className="d-flex flex-items-start">
                      <img
                        className="avatar v-align-middle mr-2"
                        src={tech.imageUrl}
                        alt={tech.name}
                        width="24"
                        height="24"
                      />
                      {tech.name}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="Box-footer hide-md hide-lg hide-xl">
                <button
                  type="button"
                  className="btn btn-block"
                  data-close-dialog
                >
                  Fechar
                </button>
              </div>
            </div>
          </Details>
        </div>
      </div>
    </>
  )
}
