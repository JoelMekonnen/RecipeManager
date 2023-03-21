import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import userReducer from './features/userSlice'
import sidebarReducer from './features/sidebarSlice'
import ingredientReducer from './features/IngredientSlice'

// const initialState = {
//   sidebarShow: true,
// }

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       return { ...state, ...rest }
//     default:
//       return state
//   }
// }

// const store = createStore(changeState)
const rootReducer = combineReducers({
      user:userReducer,
      sidebar:sidebarReducer,
      ingredientUpdate:ingredientReducer
})
const store = configureStore({
     reducer: rootReducer
})
export default store
