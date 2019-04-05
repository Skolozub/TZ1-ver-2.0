/**
 * @file PageTemplate
 */

import React from 'react'
import styled from 'styled-components'
import { Header } from '../../organisms'

const Content = styled.div`
  display: flex;
  padding: 15px;
`

const PageTemplate = ({ children }) =>
  <>
    <Header />
    <Content>
      {children}
    </Content>
  </>

export default PageTemplate
