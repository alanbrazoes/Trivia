import React from 'react'
import AreaView from '../../components/AreaView'
import { INavigation } from '../../types'
import { Button, TextBtn, ViewPage, Text, Title } from './styles'

const Rules: React.FC<INavigation> = ({ navigation }) => {
  return (
    <AreaView>
      <ViewPage>
        <Title>Rules</Title>
        <Text>1 - 10 perguntas a serem respondidas.</Text>
        <Text>2 - 4 opções ou 2 opções de verdadeiro ou falso.</Text>
        <Text>4 - Como é calculado o score: (10 * tempo) + score atual</Text>
        <Button
          onPress={() => navigation.goBack()}
        >
          <TextBtn>Go back</TextBtn>
        </Button>
      </ViewPage>
    </AreaView>
  )
}

export default Rules
