import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'

const reducer = {
  app: appReducer
}

export const store = configureStore({
  reducer
})
