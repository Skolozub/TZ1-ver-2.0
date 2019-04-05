/**
 * @file NavItem
 */

import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const isActive = ({ isCurrent }) => ({ 'data-active': isCurrent })

const NavItemDefault = ({ children, className, ...props }) =>
  <div className={className}>
    <Link getProps={isActive} {...props}>
      {children}
    </Link>
  </div>

const NavItem = styled(NavItemDefault)`
  display: flex;
  flex: 1;
  padding: 5px;
  a {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px 5px;
    font-family: ${font('primary')};
    text-decoration: none;
    color: ${palette('grayscale', 2)};
    background-color: ${palette('primary', 3)};
    transition: 0.3s ease;
    &[data-active=true],  &:hover{
      background-color: ${palette('primary', 0)};
      color: ${palette('grayscale', 2, true)};
    }
  }
`

export default NavItem

