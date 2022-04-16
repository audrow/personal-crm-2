import {ComponentMeta, ComponentStory} from '@storybook/react'
import React from 'react'
import SignIn from './SignIn'
import { Typography } from '@mui/material'

export default {
  title: 'App/SignIn',
  component: SignIn,
} as ComponentMeta<typeof SignIn>

const Template: ComponentStory<typeof SignIn> = (args) => <SignIn {...args} />

export const Default = Template.bind({})
Default.args = {
  handleSignIn(email: string, password: string): void {
    alert(`Signing in with ${email} and ${password}`)
  },
  signUpUrl: 'https://your-company.com/sign-up',
  forgotPasswordUrl: 'https://your-company.com/forgot-password',
  footerJsx: (
    <Typography variant="body2" color="text.secondary" align="center">
      My footer
    </Typography>
  )
}
