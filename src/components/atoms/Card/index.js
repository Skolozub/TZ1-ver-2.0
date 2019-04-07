/**
 * @file Card
 */

import styled from 'styled-components'
import { font } from 'styled-theme'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
  font-family: ${font('primary')};
`

export default Card

