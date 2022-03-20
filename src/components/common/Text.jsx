import React from 'react'
import styled from 'styled-components'
import { Text } from 'rebass/styled-components'

const TextWrapper = styled(Text)`
  color: ${({ color, theme }) => theme[color]};
  cursor: ${({ cursor }) => (cursor ? cursor : 'default')};
  opacity: ${({ opacity }) => opacity};
  position: ${({ position }) => position};
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-transform: ${(textTransform) => textTransform};
  transform: ${(transform) => transform};
  @media screen and (max-width: 768px) {
    font-size: ${({ fontSizeS }) => fontSizeS};
  }
`

export const Type = {
  Primary(props) {
    return <TextWrapper color={'primary'} {...props} />
  },
  Secondary(props) {
    return <TextWrapper color={'secondary'} {...props} />
  },
  Warning(props) {
    return <TextWrapper color={'warning'} {...props} />
  },
  Success(props) {
    return <TextWrapper color={'success'} {...props} />
  },
  XXXL(props) {
    return <TextWrapper fontSize={50} {...props} />
  },
  XXL(props) {
    return <TextWrapper fontSize={40} {...props} />
  },
  XL(props) {
    return <TextWrapper fontSize={30} {...props} />
  },
  LG(props) {
    return <TextWrapper fontSize={20} {...props} />
  },
  MD(props) {
    return <TextWrapper fontSize={15} {...props} />
  },
  SM(props) {
    return <TextWrapper fontSize={12} {...props} />
  },
  XS(props) {
    return <TextWrapper fontSize={10} {...props} />
  },
  XXS(props) {
    return <TextWrapper fontSize={8} {...props} />
  }
}
