/* eslint-disable no-undef */
import { MemoryRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import { render, screen } from './test-utils'
import Signup from '../components/signup'

beforeEach(async () => {
  render(
    <Router>
      <Signup />
    </Router>
  )
})

test('should exist 4 input & one button', () => {
  const username = screen.getByPlaceholderText('Username')
  const email = screen.getByPlaceholderText('E-Mail Address')
  const password = screen.getByPlaceholderText('Password')
  const repeatPassword = screen.getByPlaceholderText('Repeat Password')
  const signupButton = screen.getByRole('button', { name: /signup/i })

  expect(email).toBeInTheDocument()
  expect(username).toBeInTheDocument()
  expect(password).toBeInTheDocument()
  expect(repeatPassword).toBeInTheDocument()
  expect(signupButton).toBeInTheDocument()
})

test('should failed when the registration is currently not possible', async () => {
  const username = screen.getByPlaceholderText('Username')
  userEvent.clear(username)
  userEvent.type(username, 'namazi')

  const email = screen.getByPlaceholderText('E-Mail Address')
  userEvent.clear(email)
  userEvent.type(email, 'namazi.q@gmail.com')

  const pass = screen.getByPlaceholderText('Password')
  userEvent.clear(pass)
  userEvent.type(pass, '1234')

  const repeatPassword = screen.getByPlaceholderText('Repeat Password')
  userEvent.clear(repeatPassword)
  userEvent.type(repeatPassword, '1234')

  const condition = screen.getByLabelText(
    'I agree to the terms and conditions.'
  )
  userEvent.clear(condition)
  userEvent.click(condition, true)

  const loginButton = screen.getByRole('button', { name: /signup/i })
  userEvent.click(loginButton)

  const alert = await screen.findByText(
    /The registration is currently not possible/i
  )
  expect(alert).toBeInTheDocument()
})

test('should prevent click send request when the username not exist', async () => {
  const email = screen.getByPlaceholderText('E-Mail Address')
  userEvent.clear(email)
  userEvent.type(email, 'namazi.q@gmail.com')

  const pass = screen.getByPlaceholderText('Password')
  userEvent.clear(pass)
  userEvent.type(pass, '1234')

  const repeatPassword = screen.getByPlaceholderText('Repeat Password')
  userEvent.clear(repeatPassword)
  userEvent.type(repeatPassword, '1234')

  const condition = screen.getByLabelText(
    'I agree to the terms and conditions.'
  )
  userEvent.clear(condition)
  userEvent.click(condition, true)

  const loginButton = screen.getByRole('button', { name: /signup/i })
  userEvent.click(loginButton)

  const alert = await screen.queryByText(
    /The registration is currently not possible/i
  )
  expect(alert).not.toBeInTheDocument()
})

test('should prevent click send request when the email not exist', async () => {
  const username = screen.getByPlaceholderText('Username')
  userEvent.clear(username)
  userEvent.type(username, 'namazi')

  const pass = screen.getByPlaceholderText('Password')
  userEvent.clear(pass)
  userEvent.type(pass, '1234')

  const repeatPassword = screen.getByPlaceholderText('Repeat Password')
  userEvent.clear(repeatPassword)
  userEvent.type(repeatPassword, '1234')

  const condition = screen.getByLabelText(
    'I agree to the terms and conditions.'
  )
  userEvent.clear(condition)
  userEvent.click(condition, true)

  const loginButton = screen.getByRole('button', { name: /signup/i })
  userEvent.click(loginButton)

  const alert = await screen.queryByText(
    /The registration is currently not possible/i
  )
  expect(alert).not.toBeInTheDocument()
})

test('should prevent click send request when the pass not exist', async () => {
  const username = screen.getByPlaceholderText('Username')
  userEvent.clear(username)
  userEvent.type(username, 'namazi')

  const email = screen.getByPlaceholderText('E-Mail Address')
  userEvent.clear(email)
  userEvent.type(email, 'namazi.q@gmail.com')

  const repeatPassword = screen.getByPlaceholderText('Repeat Password')
  userEvent.clear(repeatPassword)
  userEvent.type(repeatPassword, '1234')

  const condition = screen.getByLabelText(
    'I agree to the terms and conditions.'
  )
  userEvent.clear(condition)
  userEvent.click(condition, true)

  const loginButton = screen.getByRole('button', { name: /signup/i })
  userEvent.click(loginButton)

  const alert = await screen.queryByText(
    /The registration is currently not possible/i
  )
  expect(alert).not.toBeInTheDocument()
})

test('should prevent click send request when the pass not match', async () => {
  const username = screen.getByPlaceholderText('Username')
  userEvent.clear(username)
  userEvent.type(username, 'namazi')

  const email = screen.getByPlaceholderText('E-Mail Address')
  userEvent.clear(email)
  userEvent.type(email, 'namazi.q@gmail.com')

  const pass = screen.getByPlaceholderText('Password')
  userEvent.clear(pass)
  userEvent.type(pass, '1234')

  const repeatPassword = screen.getByPlaceholderText('Repeat Password')
  userEvent.clear(repeatPassword)
  userEvent.type(repeatPassword, '12345')

  const condition = screen.getByLabelText(
    'I agree to the terms and conditions.'
  )
  userEvent.clear(condition)
  userEvent.click(condition, true)

  const loginButton = screen.getByRole('button', { name: /signup/i })
  userEvent.click(loginButton)

  const alert = await screen.queryByText(
    /The registration is currently not possible/i
  )
  expect(alert).not.toBeInTheDocument()
})

test('should prevent click send request when the condition not checked', async () => {
  const username = screen.getByPlaceholderText('Username')
  userEvent.clear(username)
  userEvent.type(username, 'namazi')

  const email = screen.getByPlaceholderText('E-Mail Address')
  userEvent.clear(email)
  userEvent.type(email, 'namazi.q@gmail.com')

  const pass = screen.getByPlaceholderText('Password')
  userEvent.clear(pass)
  userEvent.type(pass, '1234')

  const repeatPassword = screen.getByPlaceholderText('Repeat Password')
  userEvent.clear(repeatPassword)
  userEvent.type(repeatPassword, '1234')

  const loginButton = screen.getByRole('button', { name: /signup/i })
  userEvent.click(loginButton)

  const alert = await screen.queryByText(
    /The registration is currently not possible/i
  )
  expect(alert).not.toBeInTheDocument()
})
