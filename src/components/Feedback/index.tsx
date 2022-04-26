import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { ContextPlayer } from '../../context/player'
import { INavigation } from '../../types'
import { GoBack, TextBtn } from './styles'

const Result: React.FC<INavigation> = ({ navigation }) => {
  const { player: { score } } = useContext(ContextPlayer)

  const feedback = () => {
    if (score >= 1800 && score < 2699) return <Text>Nice result!</Text>
    if (score < 1800) return <Text>A little below average.</Text>
    if (score >= 2700) return <Text>Damn, you really know!</Text>
  }

  return (
    <View>
      <Text>Score: {score}</Text>
      {feedback()}
      <GoBack onPress={() => navigation.navigate('Home')}>
        <TextBtn>Play again</TextBtn>
      </GoBack>
    </View>
  )
}

export default Result
