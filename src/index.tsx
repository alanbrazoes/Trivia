import React from 'react'
import { ThemeProvider } from 'styled-components'
import StatePlayer from './context/player'
import StateQuestion from './context/questions'
import StateTimer from './context/timer'
import Routes from './routes'
import theme from './style/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatePlayer>
        <StateTimer>
          <StateQuestion>
            <Routes />
          </StateQuestion>
        </StateTimer>
      </StatePlayer>
    </ThemeProvider>
  )
}

export default App
