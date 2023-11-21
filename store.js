import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './src/slices/basketSlice'
import resturantSlice from './src/slices/resturantSlice'

export const store = configureStore({
  reducer: {
    basket: basketSlice,
    resturant: resturantSlice
  },
})