/**
 * @file ErrorForm
 */

import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const ErrorFormDefault = ({ children, ...props }) =>
  <div {...props}>
    {children}
  </div>

const ErrorForm = styled(ErrorFormDefault)`
  display: flex;
  width: 100%;
  margin-top: 10px;
  font-size: 14px;
  color: ${palette('danger', 1)};
`

export default ErrorForm
