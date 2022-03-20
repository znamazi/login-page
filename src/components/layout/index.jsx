import React from 'react'
import { Flex } from 'rebass'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = styled(Flex)`
  background: rgb(12, 11, 19);
  height: 90px;
  opacity: 0.85;
  align-items: flex-end;
  justify-content: center;
  padding: 10px;
`
const Image = styled.img`
  width: 120px;
  height: 60px;
`
const Container = styled(Flex)`
  justify-content: center;
  width: 100%;
  margin: 160px auto !important;
`

const Layout = (props) => {
  const { children } = props

  return (
    <>
      <Navbar width="100%">
        <Image src="/assets/images/logo-horizontal.png" alt="logo" />
      </Navbar>
      <Link to="/faq">
        <Image src="/assets/icons/question.svg" alt="faq" />
      </Link>

      <Container>{children}</Container>
    </>
  )
}

export default Layout
