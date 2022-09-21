import React, { useRef, useState } from 'react';
import styled from 'styled-components'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './home';
import Write from './write';

function App() {

  const navigate = useNavigate()

  return (
    <div className="App">
      <Header>
        <h1 style={{ marginLeft: '20px' }}> TIL </h1>
        <button onClick={() => navigate('/write')}> 추 가 </button>
      </Header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/write' element={<Write />} />
      </Routes>
    </div>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin: 20px;

  button {
    width: 100px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: slateblue;
    color:#fff;
    font-weight: 600;
    font-size: 1em;
    box-shadow: 2px 2px 2px #aaa;
  }
`

export default App;

