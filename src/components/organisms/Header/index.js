/**
 * @file Header
 */

import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { HeaderMenu } from '../../molecules'
import { menu } from './header.menu'

const HeaderDefault = ({ children, ...props }) =>
  <header {...props}>
    <HeaderMenu navigation={menu} />
    {children}
  </header>

const Header = styled(HeaderDefault)`
  border-bottom:  ${palette('grayscale', 5)} 1px solid;
  margin-bottom: 20px;
`

export default Header
