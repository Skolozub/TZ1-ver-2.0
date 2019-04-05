/**
 * @file LabelField
 */

import React from 'react'
import styled from 'styled-components'
import { connect } from 'formik'
import { Label, Input, ErrorMsg } from '../../atoms'

const LabelFieldDefault = props => {
  const { className, id, name = id, children, formik, showError = true, ...rest } = props
  const { values, errors, touched } = formik
  const isError = Boolean(errors[name])
  const isTouched = Boolean(touched[name])
  const isShowError = showError && isTouched && isError

  return (
    <div className={className}>
      <Label htmlFor={id}>
        {children}
      </Label>
      <Input id={id} name={name} {...rest} value={values[name]} isError={isError} isTouched={isTouched} />
      {isShowError && <ErrorMsg name={name} />}
    </div>
  )
}

const LabelField = styled(LabelFieldDefault)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export default connect(LabelField)

