import { StatusBar } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView``

export const Button = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.default.dark};
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 2px 0;
`

export const TextBtn = styled.Text`
  color: ${({ theme }) => theme.colors.default.light};
  font-size: 15px;
`

export const ViewPage = styled.View`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  padding-top: ${StatusBar.currentHeight}px;
`
