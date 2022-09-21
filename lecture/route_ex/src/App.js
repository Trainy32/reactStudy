import {Route, Routes} from 'react-router-dom'

import Cat from "./cat";
import Home from "./home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cat/:name' element={<Cat/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
