import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

// Reducers
import taskSlice from './tasks/store'

const store = configureStore({
  reducer: {
    taskSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
