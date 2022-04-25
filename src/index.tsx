import React from 'react'
import { ThemeProvider } from 'styled-components'
import StatePlayer from './context/player'
import StateQuestion from './context/questions'
import StateTimer from './context/timer'
import Routes from './routes'
import theme from './style/theme'

const App = () => {
  return (
    <StatePlayer>
      <StateTimer>
        <StateQuestion>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </StateQuestion>
      </StateTimer>
    </StatePlayer>
  )
}

export default App
