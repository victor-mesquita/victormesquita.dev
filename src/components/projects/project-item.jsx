import React from 'react'
import useThemeContext from '../../hooks/theme-context'
import Tabs from '../tabs'
import Tab from '../tabs/tab'
import Text from '../text'

function ProjectHeader({ imageUrl, name, period }) {
  return (
    <div className="flex">
      <img className="rounded-md h-16" src={imageUrl} alt={name} />
      <div className="flex flex-col ml-4">
        <Text value={name} size="2xl" color="gray-600" weight="semibold" />
        <Text value={period} size="lg" color="gray-400" />
      </div>
    </div>
  )
}

export default props => {
  const { theme, style } = useThemeContext()

  return (
    <div className="rounded shadow p-6 md:max-w-lg mb-10 md:w-2/4 md:mr-10">
      <ProjectHeader {...props}></ProjectHeader>

      <Tabs>
        <Tab title="Descrição">
          <Text
            value={props.description}
            size="lg"
            color="gray-600"
            className="my-10 mx-4"
          />
        </Tab>
        <Tab title="Responsabilidades">
          <ul className="flex flex-col my-10 mx-4">
            {props.responsabilities.map(responsability => (
              <div className="flex items-center">
                <img className="h-4 mr-2" src="/img/star.png" />
                <li className="text-gray-600">{responsability}</li>
              </div>
            ))}
          </ul>
        </Tab>
        <Tab title="Tecnologias">
          <ul className="flex flex-col my-10 mx-4">
            {props.stacks.map(stack => (
              <div className="flex items-center">
                <img className="h-4 mr-2" src={stack.imageUrl} />
                <li className="text-gray-600">{stack.name}</li>
              </div>
            ))}
          </ul>
        </Tab>
      </Tabs>
    </div>
  )
}
