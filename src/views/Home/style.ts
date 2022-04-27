import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const heigth = Dimensions.get('window').height

export const ContainerKeyboard = styled.KeyboardAvoidingView`
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 20%;
  background-color: ${({ theme }) => theme.colors.background.primary};
`

export const Content = styled.View`
  background-color: white;
  padding: 16px;
  border-radius: 5px;
`

export const Input = styled.TextInput`
  border-radius: 2px;
  margin: 4px 0;
  border: 2px solid black;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
  padding-bottom: 2px;
  height: ${heigth / 18}px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`

export const ButtonGo = styled.Pressable`
  border-radius: 2px;
  background-color: #000;
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 2px 0;
`

export const TextBtn = styled.Text`
  color: white;
  font-size: 15px;
`
