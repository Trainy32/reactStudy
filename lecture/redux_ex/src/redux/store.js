// import {createStore, combineReducers} from 'redux'
// import cat from './module/cat'

// const rootReducer = combineReducers({cat})

// const store = createStore(rootReducer)

// export default store

import {configureStore} from '@reduxjs/toolkit'
import catReducer from './module/catSlice'

const store = configureStore({reducer:{
  cat: catReducer,
}})


export default store