import React, { useContext } from 'react'
import { ContextPlayer } from '../../context/player'
import { Container, Text } from './styles'

const Score: React.FC = () => {
  const { player: { score, name } } = useContext(ContextPlayer)
  return (
    <Container>
      <Text>Name: {name}</Text>
      <Text>Score: {score}</Text>
    </Container>
  )
}

export default Score
