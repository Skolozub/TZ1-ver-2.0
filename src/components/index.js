/**
 * @file App
 */

import React from 'react'
import { Router, Redirect, navigate } from '@reach/router'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'

import { Home, Profile, News, Login } from './pages'
import theme from './themes/default'
import { PageTemplate } from './templates'
import { getCookie } from '../services/functions'

const PrivateRoute = ({ component: Component, ...props }) =>
  getCookie('isLoggined') ? <Component {...props} /> : (navigate('/login'), null)

const App = () =>
  <ThemeProvider theme={theme}>
    <>
      <Reset />
      <PageTemplate>
        <Router>
          <Home path="/" />
          <PrivateRoute path='profile' component={Profile} />
          <News path='news' />
          <Login path='login' />
        </Router>
      </PageTemplate>
    </>
  </ThemeProvider >

export default App
