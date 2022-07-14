import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state = initialState) => {
      state.count += 1
    },
    decrement: (state = initialState) => {
      state.count -= 1
    },
    reset: (state = initialState) => {
      state.count = 0
    }
  },
})

export const { increment, decrement, reset } = counterSlice.actions

export default counterSlice.reducer