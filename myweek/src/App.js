import React from "react";
import styled from "styled-components";
import { Route } from 'react-router-dom'
import Detail from "./Detail";
import MyWeek from "./MyWeek";



function App() {

  return (
    <div className="App">
      <Container>
        <Route path='/' exact component={MyWeek}/>
        <Route path='/detail/:selectedDay' exact component={Detail}/>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px; 
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
