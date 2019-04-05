/**
 * @file Label
 */

import React from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'

const LabelDefault = ({ children, ...props }) =>
  <label {...props}>
    {children}
  </label>

const Label = styled(LabelDefault)`
  display: flex;
  width: 100%;
  margin-bottom: 10px
  font-family: ${font('primary')};
  font-size: 14px;
  font-weight: bold;
`

export default Label

