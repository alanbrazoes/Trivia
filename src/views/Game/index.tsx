import React from 'react'

import Questions from '../../components/Questions'
import Score from '../../components/Score'
import Timer from '../../components/Timer'
import { INavigation } from '../../types'
import { Container, ViewPage } from './style'

const Game: React.FC<INavigation> = ({ navigation }) => (
  <Container>
    <ViewPage>
      <Score/>
      <Questions navigation={navigation}/>
      <Timer />
    </ViewPage>
  </Container>
)

export default Game
