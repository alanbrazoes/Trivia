import { StatusBar } from 'react-native'
import styled from 'styled-components/native'

export const Text = styled.Text`
  font-size: 20px;
`

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`

export const Button = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.default.dark};
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 2px 0;
  border-radius: 5px;
`

export const TextBtn = styled.Text`
  color: ${({ theme }) => theme.colors.default.light};
  font-size: 18px;
`

export const ViewPage = styled.View`
  padding: 16px;
  display: flex;
  flex: 1;
  justify-content: center;
  padding-top: ${StatusBar.currentHeight}px;
`
