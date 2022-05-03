import React from 'react'
import 'react-native'
import { render } from '@testing-library/react-native'
import Home from '../src/views/Home'
import { ThemeProvider } from 'styled-components/native'
import theme from '../src/style/theme'

describe('Home screen.', () => {
  test('1 - Should have render Home screen.', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    )

    expect(getByTestId(/inputUser/i)).toBeTruthy()
    expect(getByTestId(/buttonRules/i)).toBeTruthy()
    expect(getByTestId(/buttonGame/i)).toBeTruthy()
  })
})
