import styled from 'styled-components/native'

export const ContainerTimer = styled.View`
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background.dark};
    padding: 4
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 32;
  color: ${({ theme }) => theme.colors.default.light}
`
