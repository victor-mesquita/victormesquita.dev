import React from 'react';

import Text from '../../components/text';

export default {
  title: 'Common/Text',
  component: Text,
  argTypes: {
    color: { control: 'text' },
    size: { control: 'text' },
    weight: { control: 'text' },
  },
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "Hello mundo",
  size: "lg",

};