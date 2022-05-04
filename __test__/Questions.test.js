import React from 'react'
import 'react-native'
import { render } from '@testing-library/react-native'
import Game from '../src/views/Game'
import { ThemeProvider } from 'styled-components/native'
import theme from '../src/style/theme'
import StatePlayer from '../src/context/player'
import StateTimer from '../src/context/timer'
import StateQuestion from '../src/context/questions'

describe('Game screen.', () => {
  test('1 - Should have render Game screen.', () => {
    render(
      <ThemeProvider theme={theme}>
        <StatePlayer>
          <StateTimer>
            <StateQuestion>
              <Game />
            </StateQuestion>
          </StateTimer>
        </StatePlayer>
      </ThemeProvider>
    )
  })
})
