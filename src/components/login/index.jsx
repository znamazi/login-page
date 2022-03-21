import React, { useEffect, useState } from 'react'
import { Flex } from 'rebass'
import { Link } from 'react-router-dom'

import {
  Box,
  Input,
  InputWrapper,
  Image,
  Button,
  Alert
} from '../../style/styles'
import { Type } from '../common/Text'
import { useLoginActions, useLoginState } from '../../state/login/hooks'
import { LABEL } from '../../constant'
import { emailValidation } from '../../utils/emailValidation'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validationError, setValidationError] = useState()
  const [showPass, setShowPass] = useState(false)

  const { message, error, user } = useLoginState()
  const { doLogin, fetchUser, addEmail, removeError } = useLoginActions()

  useEffect(() => {
    fetchUser()
    removeError()
  }, [])

  useEffect(() => {
    if (user) {
      setEmail(user.email)
      addEmail(user.email)
      setPassword(user.login.password)
    }
  }, [user])

  const updateInput = (e, label) => {
    setValidationError()
    switch (label) {
      case LABEL.EMAIL:
        setEmail(e.target.value)
        addEmail(e.target.value)
        break

      case LABEL.PASSWORD:
        setPassword(e.target.value)
        break

      default:
        break
    }
  }

  const handleLogin = () => {
    if (!email || !emailValidation(email)) {
      setValidationError(LABEL.EMAIL)
      return
    }
    if (!password) {
      setValidationError(LABEL.PASSWORD)
      return
    }
    doLogin({ email, password })
  }

  return (
    // TODO do responsive
    <Box padding="60px 20px" maxWidth="600px">
      {error && (
        <Alert error={error}>
          <Type.MD>{message}</Type.MD>
        </Alert>
      )}
      <Type.XXXL fontFamily="nova-flat-v22-latin-regular">LOGIN</Type.XXXL>
      <InputWrapper margin="20px 0 0" error={validationError === LABEL.EMAIL}>
        <Image src="/assets/icons/mail.svg" />
        <Input
          placeholder="E-Mail Address"
          type="email"
          autoComplete="on"
          required
          onChange={(e) => updateInput(e, LABEL.EMAIL)}
          value={email}
        />
      </InputWrapper>
      <InputWrapper
        margin="0 0 20px"
        error={validationError === LABEL.PASSWORD}
      >
        <Image src="/assets/icons/lock.svg" />
        <Input
          placeholder="Password"
          type={showPass ? 'text' : 'password'}
          required
          onChange={(e) => updateInput(e, LABEL.PASSWORD)}
          autoComplete="on"
          value={password}
        />
        <Image
          src="/assets/icons/eye.svg"
          onClick={() => setShowPass(!showPass)}
        />
      </InputWrapper>
      <Button
        margin="30px 0"
        onClick={handleLogin}
        role="button"
        name="login"
        onKeyUp={(e) => {
          if (e.key == 'Enter') handleLogin()
        }}
      >
        <Type.LG
          color="rgb(12, 11, 19)"
          transform="skew(20deg)"
          fontWeight="bold"
        >
          LOGIN
        </Type.LG>
      </Button>
      <Flex>
        <Type.MD>{`Don't have an account yet?`}</Type.MD>
        <Type.MD padding="0 5px">
          <Link to="/signup" cursor="pointer">
            Signup
          </Link>
        </Type.MD>
      </Flex>
      <Flex marginTop={`20px`}>
        <Type.MD>{`Don't remember your password?`}</Type.MD>
        <Type.MD padding="0 5px" cursor="pointer">
          <Link to="/forgot-pass">Recover my Password</Link>
        </Type.MD>
      </Flex>
    </Box>
  )
}

export default Login
