import React, { useContext } from 'react'
import { Text } from 'react-native'
import { ContextPlayer } from '../../context/player'
import { Container } from './styles'

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
