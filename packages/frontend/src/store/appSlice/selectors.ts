import { RootState } from './types'

export const usernameSelector = (state: RootState): string => state.app.username

export const passwordSelector = (state: RootState): string => state.app.password
