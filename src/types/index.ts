import React from 'react'
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation'

type Props = {
  children: React.ReactNode
}

interface INavigation {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

export type { Props, INavigation }
