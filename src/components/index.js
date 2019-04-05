/**
 * @file App
 */

import React from 'react'
import { Router, Redirect } from '@reach/router'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'

import { Home, Profile, News, Login } from './pages'
import theme from './themes/default'
import { PageTemplate } from './templates'
import { getCookie } from '../services/functions'

const checkAuth = (yes, no) => {
  console.log(getCookie('isLoggined'))
  return getCookie('isLoggined') ? yes : no}

const App = () =>
  <ThemeProvider theme={theme}>
    <>
      <Reset />
      <PageTemplate>
        <Router>
          <Home path="/" />
          {checkAuth(<Profile path='profile' />, <Redirect from='profile' to="login" noThrow />)}
          <News path='news' />
          <Login path='login' />
        </Router>
      </PageTemplate>
    </>
  </ThemeProvider >

export default App
