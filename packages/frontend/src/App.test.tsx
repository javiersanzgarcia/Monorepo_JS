import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './store'
import App from '~/App'

describe('App', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })

  it('renders App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const divWrapper = screen.getByTestId('appRender')
    expect(divWrapper).toBeTruthy()
  })
})
