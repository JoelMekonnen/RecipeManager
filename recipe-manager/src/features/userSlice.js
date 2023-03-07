import { createSlice } from '@reduxjs/toolkit'

const initialState = {
       user:JSON.parse(localStorage.getItem("user-profile")),
       loggedin:localStorage.getItem("loggedIn")
}

export const userSlice = createSlice({
      name:'user',
      initialState,
      reducers: {
           login: (state) => {
                state.loggedin = true
           },
           logout: (state) => {
               state.loggedin = false
           },
           setUser: (state, action) => {
                //  console.log(action.payload)
                 state.user = action.payload
           }
      }
})


export const { login, logout, setUser } = userSlice.actions

export default userSlice.reducer