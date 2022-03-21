import React, { useState, useEffect } from 'react'
import { Flex } from 'rebass'
import { Link } from 'react-router-dom'
import {
  Box,
  Input,
  InputWrapper,
  Image,
  Button,
  Checkbox,
  Label,
  ContainerCheckBox,
  Alert
} from '../../style/styles'
import { Type } from '../common/Text'
import { LABEL } from '../../constant'
import { useLoginActions, useLoginState } from '../../state/login/hooks'
import { emailValidation } from '../../utils/emailValidation'

const Signup = () => {
  const { error, message, userEmail } = useLoginState()

  const [newUser, setNewUser] = useState({
    username: '',
    email: userEmail,
    pass: '',
    repeatPass: ''
  })
  const [condition, setCondition] = useState(false)
  const [validationError, setValidationError] = useState()

  const { doRegister, removeError } = useLoginActions()

  useEffect(() => {
    removeError()
  }, [])

  const updateData = (e) => {
    setValidationError()
    let fieldName = e.target.id
    setNewUser({ ...newUser, [fieldName]: e.target.value })
  }

  const checkValidation = () => {
    if (newUser['pass'] != newUser['repeatPass']) {
      setValidationError({
        type: LABEL.REPEAT_PASSWORD,
        message: "Passwords don't match."
      })
    } else {
      setValidationError()
    }
  }
  const checkEmail = () => {
    if (!emailValidation(newUser.email)) {
      setValidationError({
        type: LABEL.EMAIL,
        message: 'Email Address is not correct'
      })
    }
  }
  const handleSignup = () => {
    if (!newUser['username']) {
      setValidationError({
        type: LABEL.USERNAME,
        message: 'Username is Required'
      })
      return
    }
    if (!newUser['email']) {
      setValidationError({
        type: LABEL.EMAIL,
        message: 'Email is Required'
      })
      return
    }
    if (!emailValidation(newUser.email)) {
      setValidationError({
        type: LABEL.EMAIL,
        message: 'Email Address is not correct'
      })
      return
    }
    if (!newUser['pass']) {
      setValidationError({
        type: LABEL.PASSWORD,
        message: 'Password is Required'
      })
      return
    }
    if (newUser['pass'] != newUser['repeatPass']) {
      setValidationError({
        type: LABEL.REPEAT_PASSWORD,
        message: "Passwords don't match."
      })
      return
    }
    if (!condition) {
      setValidationError({ type: LABEL.CONDITION })
      return
    }
    doRegister(newUser)
  }
  return (
    <Box padding="60px 20px" maxWidth="600px">
      {error && (
        <Alert error={error}>
          <Type.MD>{message}</Type.MD>
        </Alert>
      )}
      <Type.XXXL>SIGNUP</Type.XXXL>
      <InputWrapper
        margin="20px 0 0"
        error={validationError && validationError.type === LABEL.USERNAME}
      >
        <Image src="/assets/icons/user.svg" />
        <Input
          placeholder="Username"
          type="text"
          value={newUser?.username}
          id="username"
          autoComplete="on"
          onChange={(e) => updateData(e)}
        />
      </InputWrapper>
      <InputWrapper
        error={validationError && validationError.type === LABEL.EMAIL}
      >
        <Image src="/assets/icons/mail.svg" />
        <Input
          placeholder="E-Mail Address"
          type="email"
          value={newUser?.email}
          id="email"
          autoComplete="on"
          onChange={(e) => updateData(e)}
          onBlur={checkEmail}
        />
      </InputWrapper>
      <InputWrapper
        error={validationError && validationError.type === LABEL.PASSWORD}
      >
        <Image src="/assets/icons/lock.svg" />
        <Input
          placeholder="Password"
          type="password"
          autoComplete="on"
          value={newUser?.pass}
          id="pass"
          onChange={(e) => updateData(e)}
        />
        <Image src="/assets/icons/eye.svg" />
      </InputWrapper>
      <InputWrapper
        margin="0 0 20px"
        error={
          validationError && validationError.type === LABEL.REPEAT_PASSWORD
        }
      >
        <Image src="/assets/icons/lock.svg" />
        <Input
          placeholder="Repeat Password"
          type="password"
          value={newUser?.repeatPass}
          id="repeatPass"
          onKeyUp={checkValidation}
          onChange={(e) => {
            updateData(e)
          }}
        />
        <Image src="/assets/icons/eye.svg" />
      </InputWrapper>
      <ContainerCheckBox
        error={validationError && validationError.type === LABEL.CONDITION}
      >
        <Label
          labelFor="condition"
          // onClick={(e) => {
          //   e.stopPropagation()
          // }}
        >
          <Checkbox
            value={condition}
            onChange={(e) => {
              setValidationError()
              setCondition(e.target.checked)
            }}
            id="condition"
          />

          <Type.MD>I agree to the terms and conditions.</Type.MD>
        </Label>
      </ContainerCheckBox>

      <Button margin="30px 0" onClick={handleSignup}>
        <Type.LG
          color="rgb(12, 11, 19)"
          transform="skew(20deg)"
          fontWeight="bold"
        >
          Signup
        </Type.LG>
      </Button>
      <Flex>
        <Type.MD>{`Do you have an account?`}</Type.MD>
        <Type.MD padding="0 5px">
          <Link to="/" cursor="pointer">
            Login
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

export default Signup
