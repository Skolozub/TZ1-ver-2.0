/**
 * @file LoginForm
 */

import React, { Component } from 'react'
import { navigate } from '@reach/router'
import { object, string } from 'yup'
import { setCookie, getCookie, deleteCookie } from '../../functions'

const withLogin = WrappedComponent =>
  class LoginHOC extends Component {
    state = {
      errorMsg: '',
      isLogined: false,
    }

    componentDidMount = () => {
      const cookie = getCookie('isLoggined')
      if (cookie) this.setState({ isLogined: true })
    }

    userLogin = userData => {
      const schema = object().shape({
        username: string().matches(/Admin/),
        password: string().matches(/12345/),
      })

      schema.isValid(userData).then(isValid => {
        if (isValid) {
          setCookie('isLoggined', true)
          navigate('/profile')
        }
        this.setState({ errorMsg: 'Имя пользователя или пароль введены не верно' })
      })
    }

    userLogout = () => {
      deleteCookie('isLoggined')
      this.setState({ isLogined: false })
    }

    render = () =>
      <WrappedComponent
        {...this.props}
        {...this.state}
        userLogin={this.userLogin}
        userLogout={this.userLogout}
      />
  }

export default withLogin
