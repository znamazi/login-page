import { Flex } from 'rebass'
import styled from 'styled-components'

export const Box = styled.div`
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
  height: ${({ height }) => height};
  background: ${({ background }) =>
    background ? background : 'rgb(12, 11, 19)'};
  box-sizing: border-box;
  box-shadow: ${({ boxShadow }) => boxShadow};
  border: ${({ border }) => (border ? border : 'transparent')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '5px')};
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'center'};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : 'column'};
  align-items: ${({ alignItem }) => (alignItem ? alignItem : 'center')};
  padding: ${({ padding }) => (padding ? padding : '20px')};
  margin: ${({ margin }) => margin};
  z-index: ${({ zIndex }) => zIndex};
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '400px')};
  width: 100%;
  background: ${({ background }) => (background ? background : 'transparent')};
  height: ${({ height }) => (height ? height : '40px')};

  border: none;
  border-bottom: ${({ error }) =>
    error ? '1px solid #f44336' : '1px solid #5a5a5a'};
  box-sizing: border-box;
  color: ${({ color }) => (color ? color : '#ffffff')};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  cursor: ${({ cursor }) => (cursor ? cursor : 'pointer')};
  &:focus {
    outline: none;
  }
  &:hover {
    filter: brightness(0.9);
  }
`
export const Input = styled.input`
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '400px')};
  width: 100%;
  padding: 0 10px;
  background: ${({ background }) => (background ? background : 'transparent')};
  height: ${({ height }) => height};
  border: none;
  box-sizing: border-box;
  color: ${({ color }) => (color ? color : 'rgba(255, 255, 255, 0.5)')};
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #909090;
    opacity: 1; /* Firefox */
    font-size: 13px;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #909090;
    font-size: 13px;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #909090;
    font-size: 13px;
  }
`
export const Image = styled.img`
  width: ${({ width }) => (width ? width : '20px')};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  box-sizing: ${({ boxSizing }) => boxSizing};
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '160px')};
  width: 100%;
  min-height: ${({ height }) => (height ? height : '65px')};
  background: ${({ background }) =>
    background ? background : 'rgb(255, 208, 38)'};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '5px')};
  border: ${({ border }) => (border ? border : 'transparent')};
  margin: ${({ margin }) => margin};
  box-sizing: border-box;
  cursor: ${({ cursor }) => (cursor ? cursor : 'pointer')};
  &:focus {
    outline: none;
  }
  transform: ${({ transform }) => (transform ? transform : 'skew(-20deg)')};
`
export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
`
export const Alert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '400px')};
  width: 100%;
  height: 50px;
  background: ${({ error }) => (error ? '#f44336' : '#04AA6D')};
  border-radius: 5px;
`
export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerCheckBox = styled(Flex)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 400px;
  width: 100%;
  ${({ error }) => error && 'border : 1px solid #f44336; padding:10px 2px'};
`
