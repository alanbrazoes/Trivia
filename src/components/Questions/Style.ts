import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`

export const Text = styled.Text`
  font-size: large;
  margin: 4px;
  width: 100%;
`

export const ButtonAnswers = styled.Pressable`
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

interface IButton {
  visible: boolean
}

export const ButtonNext = styled.Pressable<IButton>`
  background-color: ${({ theme }) => theme.colors.background.primary};
  opacity: ${({ visible }) => visible ? 1 : 0};
  align-items: center;
  padding: 8px;
  margin: 2px 0;
`
