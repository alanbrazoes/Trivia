import React, { useEffect } from 'react'
import { INavigation } from '../../types'
import { ViewPage } from '../../style/Containers'
import AreaView from '../../components/AreaView'
import Result from '../../components/Feedback'

const Feedback: React.FC<INavigation> = ({ navigation }) => {
  useEffect(() => {
    return () => {
      navigation.navigate('Home')
    }
  }, [])

  return (
    <AreaView background='red'>
      <ViewPage>
        <Result />
      </ViewPage>
    </AreaView>
  )
}

export default Feedback
