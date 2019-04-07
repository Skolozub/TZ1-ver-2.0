/**
 * @file App
 */

import React from 'react'
import { Provider } from 'react-redux'
import { Router, navigate } from '@reach/router'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'

import { Home, Profile, News, Login } from './pages'
import theme from './themes/default'
import { PageTemplate } from './templates'
import { getCookie } from '../functions'
import { store } from '../store'

const PrivateRoute = ({ component: Component, ...props }) =>
  getCookie('isLoggined') ? <Component {...props} /> : (navigate('/login'), null)

const App = () =>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Reset />
      <PageTemplate>
        <Router>
          <Home path="/" />
          <PrivateRoute path='profile' component={Profile} />
          <News path='news' />
          <Login path='login' />
        </Router>
      </PageTemplate>
    </Provider>
  </ThemeProvider >

export default App
