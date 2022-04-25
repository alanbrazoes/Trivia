import React, { useContext } from 'react'
import { Text } from 'react-native'
import { ContextPlayer } from '../../context/player'
import { Container } from './styles'

const Result: React.FC = () => {
  const { player: { score } } = useContext(ContextPlayer)

  const feedback = () => {
    if (score >= 1800 && score < 2699) return <Text>Belo resultado</Text>
    if (score < 1800) return <Text>Um pouco abaixo da média</Text>
    if (score >= 2700) return <Text>Caramba, tu conhece mesmo!!</Text>
  }

  return (
    <Container>
      <Text>Score: {score}</Text>
      {feedback()}
    </Container>
  )
}

export default Result
