import React from 'react'
import { StatusBar } from 'react-native'
import { Container } from './styles'

interface IArea {
  children: React.ReactNode;
  background: string
}

const AreaView: React.FC<IArea> = ({ children, background }) => {
  return (
    <Container>
      <StatusBar backgroundColor={background}/>
      {children}
    </Container>
  )
}

export default AreaView
