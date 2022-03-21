import { createAction } from '@reduxjs/toolkit'

export const USER_FETCH = createAction('USER_FETCH')
export const USER_LOGIN_SUCCESS = createAction('USER_LOGIN_SUCCESS')
export const USER_LOGIN_FAILED = createAction('USER_LOGIN_FAILED')

export const ADD_USER_EMAIL = createAction('ADD_USER_EMAIL')

export const USER_REGISTER_REQUESTED = createAction('USER_REGISTER_REQUESTED')
export const USER_REGISTER_SUCCESS = createAction('USER_REGISTER_SUCCESS')
export const USER_REGISTER_FAILED = createAction('USER_REGISTER_FAILED')

export const REMOVE_ERROR = createAction('REMOVE_ERROR')
