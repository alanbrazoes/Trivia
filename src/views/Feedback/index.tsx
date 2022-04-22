import React, { useEffect } from 'react'

import { Text } from 'react-native'
import { INavigation } from '../../types'
import { ViewPage } from '../../style/Containers'
import AreaView from '../../components/AreaView'

const Feedback: React.FC<INavigation> = ({ navigation }) => {
  useEffect(() => {
    return () => {
      navigation.navigate('Home')
    }
  }, [])

  return (
    <AreaView>
      <ViewPage>
        <Text>Feedback</Text>
      </ViewPage>
    </AreaView>
  )
}

export default Feedback
