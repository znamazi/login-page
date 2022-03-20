/* eslint-disable no-undef */
import { MemoryRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import Login from '../components/login'
import { render, screen } from './test-utils'

beforeEach(async () => {
  render(
    <Router>
      <Login />
    </Router>
  )
  await screen.findByDisplayValue(/noella.blok@example.com/i)
})

test('should exist two input & one button', () => {
  const email = screen.getByPlaceholderText('E-Mail Address')
  const password = screen.getByPlaceholderText('Password')
  const loginButton = screen.getByRole('button', { name: /login/i })

  expect(email).toBeInTheDocument()
  expect(password).toBeInTheDocument()
  expect(loginButton).toBeInTheDocument()
})

// eslint-disable-next-line no-undef
test('fetch & receive a user ', async () => {
  // after some time, the user should be received

  expect(
    await screen.findByDisplayValue(/noella.blok@example.com/i)
  ).toBeInTheDocument()
})

test('should failed if user info is incorrect', async () => {
  const email = await screen.findByPlaceholderText('E-Mail Address')
  userEvent.clear(email)
  userEvent.type(email, 'namazi.q@gmail.com')

  const pass = await screen.findByPlaceholderText('Password')
  userEvent.clear(pass)
  userEvent.type(pass, 'ping')

  const loginButton = screen.getByRole('button', { name: /login/i })
  userEvent.click(loginButton)

  const alert = await screen.findByText(/e-mail or password is incorrect./i)
  expect(alert).toBeInTheDocument()
})

test('should prevent login click if user info is incorrect', async () => {
  const email = await screen.findByPlaceholderText('E-Mail Address')
  userEvent.clear(email)
  userEvent.type(email, 'noella.blok')

  const pass = await screen.findByPlaceholderText('Password')
  userEvent.clear(pass)
  userEvent.type(pass, 'ping')

  const loginButton = screen.getByRole('button', { name: /login/i })
  userEvent.click(loginButton)

  const alert = await screen.queryByText(/e-mail or password is incorrect./i)
  expect(alert).not.toBeInTheDocument()
  const profile = await screen.queryByText(/Profile/i)
  expect(profile).not.toBeInTheDocument()
})

// test('should login if user info is correct', async () => {
//   const email = await screen.findByPlaceholderText('E-Mail Address')
//   userEvent.clear(email)
//   userEvent.type(email, 'noella.blok@example.com')

//   const pass = await screen.findByPlaceholderText('Password')
//   userEvent.clear(pass)
//   userEvent.type(pass, 'ping')

//   const loginButton = screen.getByRole('button', { name: /login/i })
//   userEvent.click(loginButton)

//   const profile = await screen.findByText(/Profile/i)
//   expect(profile).toBeInTheDocument()
// })
