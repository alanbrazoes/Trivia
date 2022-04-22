import React, { useContext, useEffect } from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { ContextQuestions } from '../../context/questions'
import { ContextTimer } from '../../context/timer'

const Timer: React.FC = () => {
  const { timer, setTimer, paused } = useContext(ContextTimer)
  const { states: { questions } } = useContext(ContextQuestions)

  let time: any = () => null

  useEffect(() => {
    if (!paused && timer > 0 && questions.length === 10) {
      time = setTimeout(() => {
        setTimer(timer - 1)
      }, 1000)
    }
  })

  useEffect(() => () => clearTimeout(time))

  time()

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>00:{timer.toString().padStart(2, '0')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 4
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#fff'
  }
})

export default Timer
