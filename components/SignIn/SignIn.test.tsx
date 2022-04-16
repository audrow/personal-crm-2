import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import React from 'react'
import SignIn from './SignIn'

describe('SignIn', () => {
  it('renders', async () => {
    const signUpUrl = '/signup'
    const forgotPasswordUrl = '/forgot-password'
    const handleSignInSpy = jest.fn()

    const container = render(
      <SignIn
        handleSignIn={handleSignInSpy}
        signUpUrl={signUpUrl}
        forgotPasswordUrl={forgotPasswordUrl}
      />,
    )

    expect(container).toMatchSnapshot()

    const email = 'a@b.com'
    const password = 'donthackplease'

    await user.type(screen.getByLabelText(/email/i), email)
    await user.type(screen.getByLabelText(/password/i), password)
    await user.click(screen.getByRole('button', {name: /sign in/i}))

    expect(handleSignInSpy).toHaveBeenCalledTimes(1)
    expect(handleSignInSpy).toHaveBeenCalledWith(email, password)
  })
  it('inserts links correctly', async () => {
    // TODO
  })
})
