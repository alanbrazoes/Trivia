import React from 'react'
import 'react-native'
import { render } from '@testing-library/react-native'
import Feedback from '../src/views/Feedback'
import { ThemeProvider } from 'styled-components/native'
import theme from '../src/style/theme'
import StatePlayer from '../src/context/player'

describe('Feedback screen.', () => {
  test('1 - Should have render Feedback screen.', () => {
    render(
      <ThemeProvider theme={theme}>
        <StatePlayer>
          <Feedback />
        </StatePlayer>
      </ThemeProvider>
    )
  })
})
