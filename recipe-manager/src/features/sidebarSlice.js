import { createSlice } from "@reduxjs/toolkit";

const initialState = {
       sidebarShow: true,
       sidebarUnfoldable:true
}
export const sideBarSlice = createSlice({
      name:'sidebar',
      initialState,
      reducers: {
           set: (state, action) => {
                state.sidebarShow = action.payload
           },
           setUnfoldable: (state, action) =>  {
               state.sidebarUnfoldable = action.payload
           }
      }
})
export const { set, setUnfoldable } = sideBarSlice.actions
export default sideBarSlice.reducer