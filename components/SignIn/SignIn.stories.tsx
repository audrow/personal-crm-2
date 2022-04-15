import {ComponentMeta, ComponentStory} from '@storybook/react'
import React from 'react'
import SignIn from './SignIn'

export default {
  title: 'App/SignIn',
  component: SignIn,
} as ComponentMeta<typeof SignIn>

const Template: ComponentStory<typeof SignIn> = (args) => <SignIn {...args} />

export const Default = Template.bind({})
Default.args = {
  handleSignIn(email: string, password: string): void {
    console.log(`Signing in with ${email} and ${password}`)
  },
}
