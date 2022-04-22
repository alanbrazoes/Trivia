import React from 'react'

import Questions from '../../components/Questions'
import Score from '../../components/Score'
import Timer from '../../components/Timer'
import { INavigation } from '../../types'
import { ViewPage } from '../../style/Containers'
import AreaView from '../../components/AreaView'

const Game: React.FC<INavigation> = ({ navigation }) => (
  <AreaView>
    <ViewPage>
      <Score/>
      <Questions navigation={navigation}/>
      <Timer />
    </ViewPage>
  </AreaView>
)

export default Game
