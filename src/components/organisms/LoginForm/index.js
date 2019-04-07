/**
 * @file LoginForm
 */

import React from 'react'
import styled from 'styled-components'
import { Form, withFormik } from 'formik'

import { Button, ErrorForm } from '../../atoms'
import { LabelField } from '../../molecules'
import { options } from './options.formik'
import { withLogin } from '../../../decorators'

const LoginFormDefault = ({ isLogined, userLogout, className, errorMsg }) =>
  <>
    {
      isLogined
        ?
        <Button palette='danger' onClick={userLogout}>Выйти</Button>
        :
        <Form className={className}>
          <LabelField id='username'>Имя пользователя</LabelField>
          <LabelField id='password' type='password'>Пароль</LabelField>
          <Button type='submit' palette='primary'>Войти</Button>
          <ErrorForm>{errorMsg}</ErrorForm>
        </Form>
    }
  </>

const LoginForm = styled(LoginFormDefault)`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 20px;
  padding: 20px 30px;
`

export default withLogin(withFormik(options)(LoginForm))

