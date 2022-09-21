import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'

import { auth, db } from './shared/firebase'
import { onAuthStateChanged, signOut  } from 'firebase/auth'

import SignUp from './signup'
import Login from "./login";

const Home = () => {
  return (
    <div>
      <h1>환영합니다!</h1>
      <button onClick={() => { signOut(auth)}}>로그아웃</button>
    </div>
  )
}

function App() {

  const [is_login, setIsLogin]  = React.useState(false);

  console.log(auth.currentUser)

  const loginCheck = async (user) => { 
    if(user) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }
  
  React.useEffect(() => {
    onAuthStateChanged(auth, loginCheck)
  }, [])

  return (
    <div className="App">
      <h5>my@email.com</h5>
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        {
          is_login ? (
            <Route path="/" element={<Home/>}/>
          ) : (<Route path="/" element={<Login />}/>)
        }
      </Routes>
    </div>
  );
}

export default App;
