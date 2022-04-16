import {ComponentMeta, ComponentStory} from '@storybook/react'
import React from 'react'
import Copyright from './Copyright'

export default {
  title: 'App/Copyright',
  component: Copyright,
} as ComponentMeta<typeof Copyright>

const Template: ComponentStory<typeof Copyright> = (args) => ( <Copyright {...args} />
)

export const OnlyName = Template.bind({})
OnlyName.args = {
  holderName: 'Your Company',
}

export const NameAndUrl = Template.bind({})
NameAndUrl.args = {
  holderName: 'Your Company',
  holderUrl: 'https://your-company.com',
}

export const NameAndYear = Template.bind({})
NameAndYear.args = {
  holderName: 'Your Company',
  year: 2020,
}

export const NameAndUrlAndYear = Template.bind({})
NameAndUrlAndYear.args = {
  holderName: 'Your Company',
  holderUrl: 'https://your-company.com',
  year: 2020,
}
