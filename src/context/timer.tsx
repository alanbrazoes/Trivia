import React, { createContext, useState } from 'react'
import { ITimer } from '../types/states'
import { Props } from '../types'

export const ContextTimer = createContext({} as ITimer)

const StateTimer: React.FC<Props> = ({ children }) => {
  const [timer, setTimer] = useState(30)
  const [paused, setPaused] = useState(false)

  return (
    <ContextTimer.Provider value={{ timer, setTimer, paused, setPaused }}>
      {children}
    </ContextTimer.Provider>
  )
}

export default StateTimer
