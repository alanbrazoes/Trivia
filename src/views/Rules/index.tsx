import React from 'react'
import { Text } from 'react-native'
import { Container, ViewPage } from '../../style/Containers'

const Rules: React.FC = () => {
  return (
    <Container>
      <ViewPage>
        <Text>Rules</Text>
        <Text>1 - 10 perguntas a serem respondidas.</Text>
        <Text>2 - 4 opções ou 2 opções de verdadeiro ou falso.</Text>
        <Text>3 - Nível de dificuldade: hard: 3; medium: 2; easy: 1</Text>
        <Text>4 - Como é calculado o score: 10 + (nível de dificuldade * tempo) + score atual</Text>
      </ViewPage>
    </Container>
  )
}

export default Rules
