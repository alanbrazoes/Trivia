import React from 'react'
import { Container } from './styles'

const AreaView: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default AreaView
