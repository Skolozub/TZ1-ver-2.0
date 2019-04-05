/**
 * @file ErrorMsg
 */

import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { ErrorMessage } from 'formik'

const ErrorMsgDefault = ({ name, ...props }) =>
  <div {...props}>
    <ErrorMessage name={name} />
  </div>

const ErrorMsg = styled(ErrorMsgDefault)`
  display: flex;
  width: 100%;
  margin-top: 5px;
  font-size: 14px;
  color: ${palette('danger', 1)};
`

export default ErrorMsg
