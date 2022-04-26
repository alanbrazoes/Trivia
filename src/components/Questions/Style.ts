import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`

export const ButtonAnswers = styled.Pressable`
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

interface IButton {
  visible: boolean
}

export const ButtonNext = styled.Pressable<IButton>`
  background-color: green;
  opacity: ${({ visible }) => visible ? 1 : 0};
  align-items: center;
  padding: 8px;
  margin: 2px 0;
`
