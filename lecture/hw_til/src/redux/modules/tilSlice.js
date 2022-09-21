import {createSlice} from '@reduxjs/toolkit'

const tilSlice = createSlice({
  name: 'tilList',
  
  initialState: [{ subject: 'React',
    text: '오늘은 웹팩과 바벨 가지고 프로젝트를 세팅해봤다!',
    studyTime: '40',
  }],
  
  reducers: {
    addTil: (state, action) => {
      state = state.push(action.payload)
    }
  }
   
})


export const {addTil} = tilSlice.actions
export default tilSlice.reducer