import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Button } from '.'

test('loads and displays greeting', async () => {
  const onClick = jest.fn()

  render(<Button onClick={onClick}>Test</Button>)

  await userEvent.click(screen.getByText('Test'))

  expect(onClick).toBeCalled()
})
