import React, { useEffect } from 'react'

import { Text } from 'react-native'
import { INavigation } from '../../types'
import { Container, ViewPage } from '../../style/Containers'

const Feedback: React.FC<INavigation> = ({ navigation }) => {
  useEffect(() => {
    return () => {
      navigation.navigate('Home')
    }
  }, [])

  return (
    <Container>
      <ViewPage>
        <Text>Feedback</Text>
      </ViewPage>
    </Container>
  )
}

export default Feedback
