import React, { useEffect } from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { INavigation } from '../../types'

const Feedback: React.FC<INavigation> = ({ navigation }) => {
  useEffect(() => {
    return () => {
      navigation.navigate('Home')
    }
  }, [])

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Feedback</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff'
  }
})

export default Feedback
