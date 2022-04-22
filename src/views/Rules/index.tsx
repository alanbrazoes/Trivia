import React from 'react'
import { Text } from 'react-native'
import AreaView from '../../components/AreaView'
import { ViewPage } from '../../style/Containers'

const Rules: React.FC = () => {
  return (
    <AreaView>
      <ViewPage>
        <Text>Rules</Text>
        <Text>1 - 10 perguntas a serem respondidas.</Text>
        <Text>2 - 4 opções ou 2 opções de verdadeiro ou falso.</Text>
        <Text>4 - Como é calculado o score:(10 * tempo) + score atual</Text>
      </ViewPage>
    </AreaView>
  )
}

export default Rules
