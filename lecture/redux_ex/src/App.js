import React from "react";
import {useSelector, useDispatch} from 'react-redux'
// import {changeName} from './redux/module/cat'
import {changeName} from './redux/module/catSlice'

function App() {
  const cat = useSelector(state => state.cat)
  const dispatch = useDispatch()

  return ( 
    <div className="App">
      <p>name :::  {cat.name}</p>
      <button onClick={() => {
        dispatch(changeName('ruby'))
      }}>이름 바꾸기</button>
    </div>
  );
}

export default App;
