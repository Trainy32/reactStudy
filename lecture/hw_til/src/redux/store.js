import {configureStore} from '@reduxjs/toolkit'
import tilReducer from './modules/tilSlice'

const store = configureStore ({
  reducer: {
    tilList: tilReducer,
  }
})

export default store
