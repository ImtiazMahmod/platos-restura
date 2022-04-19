import { configureStore } from '@reduxjs/toolkit'
import burgerReducer from './burgerSlice/burgerSlice'
export const store = configureStore({
  reducer: {
    platosBurger: burgerReducer
  },
})

