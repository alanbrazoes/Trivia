import React from 'react'
import 'react-native'
import { render } from '@testing-library/react-native'
import Rules from '../src/views/Rules'
import { ThemeProvider } from 'styled-components/native'
import theme from '../src/style/theme'

describe('Rules screen.', () => {
  test('1 - Should have render Rules screen.', () => {
    render(
      <ThemeProvider theme={theme}>
        <Rules />
      </ThemeProvider>
    )
  })
})
