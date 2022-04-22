import { StatusBar } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${StatusBar.currentHeight};
`
