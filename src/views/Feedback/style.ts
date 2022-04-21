import { StatusBar } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const ViewPage = styled.View`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  padding-top: ${StatusBar.currentHeight}
`
