import { configureStore } from '@reduxjs/toolkit'

import login from './login/reducer'

export const store = configureStore({
  reducer: {
    login
  }
})
