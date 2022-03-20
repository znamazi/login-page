import { useCallback } from 'react'
import axios from 'axios'
import { useAppSelector, useAppDispatch } from '../hooks'
import {
  ADD_USER_EMAIL,
  USER_FETCH,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESS
} from './actions'

export function useLoginState() {
  return useAppSelector((state) => state.login)
}

export function useLoginActions() {
  const dispatch = useAppDispatch()
  const { user } = useLoginState()

  const fetchUser = useCallback(async () => {
    try {
      const { data } = await axios.get('https://randomuser.me/api')
      const user = data.results[0]

      if (user) {
        dispatch(USER_FETCH({ user }))
        return
      }
    } catch (error) {
      console.log('Error happend in fetch User', error)
    }
  })

  const doLogin = useCallback(async (userCredential) => {
    try {
      if (
        user.email === userCredential.email &&
        user.login.password === userCredential.password
      ) {
        dispatch(USER_LOGIN_SUCCESS({ user }))
        return
      }
      dispatch(
        USER_LOGIN_FAILED({ message: 'e-mail or password is incorrect.' })
      )
    } catch (error) {
      dispatch(
        USER_LOGIN_FAILED({ message: 'e-mail or password is incorrect.' })
      )
    }
  })

  const doRegister = useCallback(async (newUser) => {
    try {
      const { data } = await axios.post('http://localhost:5000/create', newUser)
      if (data.success) {
        dispatch(
          USER_REGISTER_SUCCESS({ message: 'Your info saved successfully' })
        )
      }
      dispatch(
        USER_REGISTER_FAILED({
          message: 'The registration is currently not possible'
        })
      )
    } catch (error) {
      dispatch(
        USER_REGISTER_FAILED({
          message: 'The registration is currently not possible'
        })
      )
    }
  })

  const addEmail = useCallback(async (email) => {
    dispatch(ADD_USER_EMAIL(email))
  })

  return { doLogin, fetchUser, doRegister, addEmail }
}
