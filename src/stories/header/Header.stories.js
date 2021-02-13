import React from 'react'
import Header from '../../components/header'

export default {
  title: 'Header',
  component: Header,
  argTypes: {},
}

const Template = args => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  personalData: {
    name: 'Victor Mesquita',
    bio: 'Desenvolvedor full stack',
    location: 'Rio de Janeiro, RJ',
    avatarUrl:
      'https://avatars.githubusercontent.com/u/5200285?s=400&u=8ed3266443ab8f2631a6527b855310a65d317d50&v=4',
  },
}
