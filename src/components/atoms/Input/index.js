/**
 * @file Input
 */

import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { Field, connect } from 'formik'

const InputDefault = ({ isError, isTouched, ...props }) =>
  <Field {...props} />

const getColor = (defaultVal, error, valid) => ({ isError, isTouched }) => isTouched ? isError ? error : valid : defaultVal
const getBorderColor = getColor(palette('grayscale', 4), palette('danger', 0), palette('success', 0))
const getBackgroundColor = getColor(palette('white', 0), palette('danger', 4), palette('success', 4))

const Input = styled(InputDefault)`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  border: 1px solid ${props => getBorderColor(props)}
  background: ${props => getBackgroundColor(props)}
  outline: none;
  transition: 0.2s ease;
`

export default connect(Input)
