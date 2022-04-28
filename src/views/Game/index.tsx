import React from 'react'

import Questions from '../../components/Questions'
import Score from '../../components/Score'
import Timer from '../../components/Timer'
import { INavigation } from '../../types'
import AreaView from '../../components/AreaView'
import { Container } from './style'

const Game: React.FC<INavigation> = ({ navigation }) => (
  <AreaView>
    <Container>
      <Score/>
      <Questions navigation={navigation}/>
      <Timer />
    </Container>
  </AreaView>
)

export default Game
