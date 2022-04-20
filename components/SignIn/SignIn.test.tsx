import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import React from 'react'
import SignIn from './SignIn'

describe('SignIn', () => {
  const signUpUrl = '/signup'
  const forgotPasswordUrl = '/forgot-password'

  it('renders', async () => {
    const container = render(
      <SignIn
        handleSignIn={jest.fn()}
        signUpUrl={signUpUrl}
        forgotPasswordUrl={forgotPasswordUrl}
      />,
    )

    expect(container).toMatchSnapshot()
  })

  it('inserts links correctly', async () => {
    render(
      <SignIn
        handleSignIn={jest.fn()}
        signUpUrl={signUpUrl}
        forgotPasswordUrl={forgotPasswordUrl}
      />,
    )
    expect(screen.getByRole('link', {name: /sign up/i})).toHaveAttribute(
      'href',
      signUpUrl,
    )
    expect(
      screen.getByRole('link', {name: /forgot password/i}),
    ).toHaveAttribute('href', forgotPasswordUrl)
  })

  it('calls the sign in callback with correct user input', async () => {
    const handleSignInSpy = jest.fn()
    render(
      <SignIn
        handleSignIn={handleSignInSpy}
        signUpUrl={signUpUrl}
        forgotPasswordUrl={forgotPasswordUrl}
      />,
    )

    const email = 'a@b.com'
    const password = 'donthacklol'

    await user.type(screen.getByLabelText(/email/i), email)
    await user.type(screen.getByLabelText(/password/i), password)
    await user.click(screen.getByRole('button', {name: /sign in/i}))

    expect(handleSignInSpy).toHaveBeenCalledTimes(1)
    expect(handleSignInSpy).toHaveBeenCalledWith(email, password)
  })
})
