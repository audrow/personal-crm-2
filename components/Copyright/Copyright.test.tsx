import {render, screen} from '@testing-library/react'
import React from 'react'
import Copyright from './Copyright'

describe('Copyright', () => {
  it('renders', () => {
    const holderName = 'Audrow'
    const holderUrl = 'https://audrow.github.io/'
    const year = 2020

    const container = render(
      <Copyright holderName={holderName} holderUrl={holderUrl} year={year} />,
    )

    // Check snapshot
    expect(container).toMatchSnapshot()

    // Check for the copyright text
    const text = screen.getByText(/copyright/i)
    expect(text).toHaveTextContent(`Copyright © ${holderName} ${year}`)

    // Check for URL
    const holder = screen.getByText(holderName)
    expect(holder).toHaveAttribute('href', holderUrl)
  })

  it('renders without year', () => {
    const holderName = 'Audrow'
    const holderUrl = 'https://audrow.github.io/'
    const year = new Date().getFullYear()

    render(<Copyright holderName={holderName} holderUrl={holderUrl} />)
    const text = screen.getByText(/copyright/i)
    expect(text).toHaveTextContent(`Copyright © ${holderName} ${year}`)
  })

  it('renders without URL', () => {
    const holderName = 'Audrow'
    const year = 2020

    render(<Copyright holderName={holderName} year={year} />)
    const text = screen.getByText(RegExp(holderName))
    expect(text).not.toHaveAttribute('href')
  })
})
