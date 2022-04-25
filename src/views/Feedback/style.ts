import { StatusBar } from 'react-native'
import styled from 'styled-components/native'

export const ViewPage = styled.View`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  padding-top: ${StatusBar.currentHeight}px;
`
