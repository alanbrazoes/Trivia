import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView`
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 20%;
`

export const Input = styled.TextInput`
  margin: 4px 0;
  border: 1px solid black;
  padding: 2px 4px;
`

export const ButtonGo = styled.Pressable`
  background-color: #000;
  display: flex;
  align-items: center;
  padding: 8px;
`

export const TextBtn = styled.Text`
  color: white;
  font-size: 15px;
`

export const Label = styled.Text`
  font-size: 20px;
`
