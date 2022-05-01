import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

interface IArea {
  children: React.ReactNode;
  background?: string
}

const AreaView: React.FC<IArea> = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar/>
      {children}
    </SafeAreaView>
  )
}

export default AreaView
