import React, { createContext, useState } from 'react'
import { Props } from '../types'
import { IPlayer, IPlayerState } from '../types/states'

export const ContextPlayer = createContext({} as IPlayerState)

const StatePlayer: React.FC<Props> = ({ children }) => {
  const [player, setPlayer] = useState<IPlayer>({
    name: '',
    score: 0
  })

  return (
    <ContextPlayer.Provider value={{ player, setPlayer }}>
      {children}
    </ContextPlayer.Provider>
  )
}

export default StatePlayer
