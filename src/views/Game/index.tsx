import React from 'react'

import { View, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import Questions from '../../components/Questions'
import Score from '../../components/Score'
import Timer from '../../components/Timer'
import { INavigation } from '../../types'

const Game: React.FC<INavigation> = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={style.container}>
      <Score/>
      <Questions navigation={navigation}/>
      <Timer />
    </View>
  </SafeAreaView>
)

const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: StatusBar.currentHeight
  }
})

export default Game
