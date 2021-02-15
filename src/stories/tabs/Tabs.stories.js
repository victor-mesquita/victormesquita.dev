import React from 'react'

import Tabs from '../../components/tabs'

export default {
  title: 'Tabs',
  component: Tabs,
  argTypes: {},
}

const Template = args => <Tabs {...args} />

export const Default = Template.bind({})
Default.args = {}
