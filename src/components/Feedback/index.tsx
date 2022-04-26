import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { ContextPlayer } from '../../context/player'
import { INavigation } from '../../types'
import { GoBack, TextBtn } from './styles'

const Result: React.FC<INavigation> = ({ navigation }) => {
  const { player: { score } } = useContext(ContextPlayer)

  const feedback = () => {
    if (score >= 1800 && score < 2699) return <Text>Belo resultado</Text>
    if (score < 1800) return <Text>Um pouco abaixo da média</Text>
    if (score >= 2700) return <Text>Caramba, tu conhece mesmo!!</Text>
  }

  return (
    <View>
      <Text>Score: {score}</Text>
      {feedback()}
      <GoBack onPress={() => navigation.navigate('Home')}>
        <TextBtn>Jogar novamente</TextBtn>
      </GoBack>
    </View>
  )
}

export default Result
