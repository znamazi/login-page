import { createReducer } from '@reduxjs/toolkit'

import {
  ADD_USER_EMAIL,
  USER_FETCH,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESS
} from './actions'

const initialState = {
  isUserLoggedIn: false,
  user: null,
  message: '',
  error: '',
  userEmail: ''
}

export default createReducer(initialState, (builder) => {
  // Login
  builder.addCase(USER_LOGIN_SUCCESS, (state, action) => {
    return {
      ...state,
      isUserLoggedIn: true,
      user: action.payload.user,
      error: ''
    }
  })
  builder.addCase(USER_FETCH, (state, action) => {
    return { ...state, user: action.payload.user }
  })

  builder.addCase(USER_LOGIN_FAILED, (state, action) => {
    return {
      ...state,
      error: true,
      message: action.payload.message
    }
  })

  // ADD Email
  builder.addCase(ADD_USER_EMAIL, (state, action) => {
    return {
      ...state,
      userEmail: action.payload
    }
  })
  // Register
  builder.addCase(USER_REGISTER_SUCCESS, (state, action) => {
    return { ...state, message: action.payload.message, error: '' }
  })
  builder.addCase(USER_REGISTER_FAILED, (state, action) => {
    return { ...state, error: true, message: action.payload.message }
  })
})
