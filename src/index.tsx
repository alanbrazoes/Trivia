import React from 'react'
import StatePlayer from './context/player'
import StateQuestion from './context/questions'
import StateTimer from './context/timer'
import Routes from './routes'

const App = () => {
  return (
    <StatePlayer>
      <StateTimer>
        <StateQuestion>
          <Routes />
        </StateQuestion>
      </StateTimer>
    </StatePlayer>
  )
}

export default App
