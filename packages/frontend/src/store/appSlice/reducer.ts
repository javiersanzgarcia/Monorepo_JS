import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from './types'

const initialState: AppState = {
  username: '',
  password: ''
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  }
})

export const { setUsername, setPassword } = appSlice.actions
