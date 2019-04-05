/**
 * @file Button
 */

import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const ButtonDefault = ({ type = 'button', children, ...props }) =>
  <button type={type} {...props}>
    {children}
  </button>

const Button = styled(ButtonDefault)`
  min-width: 100px;
  min-height: 40px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  font-family: ${font('primary')};
  font-size: 14px;
  color: ${palette('white', 1)};
  border: 1px solid ${palette(4)};
  background-color: ${palette(2)};
  cursor: pointer;
  outline: none;
  transition: 0.3s ease;
  &:hover{
    background-color: ${palette(0)};
  }
`

export default Button

