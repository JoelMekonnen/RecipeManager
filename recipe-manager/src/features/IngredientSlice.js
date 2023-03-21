import { createSlice } from '@reduxjs/toolkit'

const initialState = {
      ingredientUpdated:false,
      ingredientCreated:false
      
}

export const ingredientSlice = createSlice({
      name:'ingredientUpdated',
      initialState,
      reducers: {
          setUpdated: (state) => {
              state.ingredientUpdated =  true
          },
          hideUpdated: (state) => {
              state.ingredientUpdated = false
          },
          setCreated: (state) => {
              state.ingredientCreated = true
          },
          hideCreated: (state) => {
              state.ingredientCreated = false
          }
      }
})

export const { setUpdated, hideUpdated, setCreated, hideCreated } = ingredientSlice.actions

export default ingredientSlice.reducer