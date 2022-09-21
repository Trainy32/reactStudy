import {createSlice} from '@reduxjs/toolkit'
import reducer from './cat'

const catSlice = createSlice({
  name: 'cat',
  initialState: {name:'슬라이스', age: 1},
  reducers: {
    changeName: (state, action) => {
      console.log(state)
      console.log(action)
      console.log(action.payload)
      state.name = action.payload;
    }
  }
})

export const {changeName} = catSlice.actions
export default catSlice.reducer
