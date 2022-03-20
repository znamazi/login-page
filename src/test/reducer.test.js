/* eslint-disable no-undef */
import {
  USER_FETCH,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESS
} from '../state/login/actions'
import reducer from '../state/login/reducer'

const user = {
  name: {
    title: 'Mrs',
    first: 'Noëlla',
    last: 'Blok'
  },
  location: {
    city: 'Suwald',
    state: 'Zuid-Holland',
    country: 'Netherlands'
  },
  email: 'noella.blok@example.com',
  login: {
    uuid: 'b09e56cf-3246-4bb7-a5bd-3042e5a91bb5',
    username: 'ticklishduck132',
    password: 'ping',
    salt: 'jrySRCAv',
    md5: '99cb62bf60c34965bd0f3e5b62a86528',
    sha1: 'fb8863e71e7087a4efe33278c266a3bff23e29ad',
    sha256: '0c9e73cbc910f374b729f8cf4023659dc1bd2ac29ab619f8d27f24a9766f3b6f'
  }
}

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    isUserLoggedIn: false,
    user: null,
    message: '',
    error: '',
    userEmail: ''
  })
})

test('should fetch User', () => {
  expect(
    reducer(undefined, {
      type: USER_FETCH,
      payload: {
        user
      }
    })
  ).toEqual({
    isUserLoggedIn: false,
    user,
    message: '',
    error: '',
    userEmail: ''
  })
})

test('should return user when user login and isUserLoggedIn become true', () => {
  expect(
    reducer(undefined, {
      type: USER_LOGIN_SUCCESS,
      payload: {
        user
      }
    })
  ).toEqual({
    isUserLoggedIn: true,
    user,
    message: '',
    error: '',
    userEmail: ''
  })
})

test('should set error when login failed', () => {
  expect(
    reducer(undefined, {
      type: USER_LOGIN_FAILED,
      payload: {
        message: 'e-mail or password is incorrect.'
      }
    })
  ).toEqual({
    isUserLoggedIn: false,
    user: null,
    message: 'e-mail or password is incorrect.',
    error: true,
    userEmail: ''
  })
})

test('should set error when register failed', () => {
  expect(
    reducer(undefined, {
      type: USER_REGISTER_FAILED,
      payload: {
        message: 'The registration is currently not possible'
      }
    })
  ).toEqual({
    isUserLoggedIn: false,
    user: null,
    message: 'The registration is currently not possible',
    error: true,
    userEmail: ''
  })
})

test('should set error when register success', () => {
  expect(
    reducer(undefined, {
      type: USER_REGISTER_SUCCESS,
      payload: {
        message: 'Your info saved successfully'
      }
    })
  ).toEqual({
    isUserLoggedIn: false,
    user: null,
    message: 'Your info saved successfully',
    error: '',
    userEmail: ''
  })
})
