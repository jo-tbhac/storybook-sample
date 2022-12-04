import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CustomizedButton as Button } from './Button'

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button'
}

const ButtonComponentMeta: ComponentMeta<typeof Button> = {
  title: 'Button/Button',
  component: Button
}

export default ButtonComponentMeta
