/**
 * @file HeaderMenu
 */

import React from 'react'
import { NavItem, Nav } from '../../atoms'

const HeaderMenu = ({ navigation }) =>
  <Nav>
    {navigation.map(({ id, text, ...itemProps }) => <NavItem key={id} {...itemProps}>{text}</NavItem>)}
  </Nav>

export default HeaderMenu
