import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const heigth = Dimensions.get('window').height

export const Container = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Text = styled.Text`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${heigth / 30};
  width: 100%;
  font-weight: bold;
`
