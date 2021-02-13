import React from 'react'
import Section from '../../components/section'
import checkIcon from "../../../static/img/check.png"

export default {
  title: 'Section',
  component: Section,
  argTypes: {},
}

const Template = args => <Section {...args} />

export const Default = Template.bind({})
Default.args = {
  title: "Hello, I'm a section",
  subTitle: 'Conheca um pouco da minha história contada pelo tempo',
  icon: checkIcon
}
