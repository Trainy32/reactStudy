import React, { useRef, useState } from 'react';
import styled from 'styled-components'

function App() {
  const subject_ref = React.useRef(null);
  const text_ref = React.useRef(null);
  const studyTime_ref = React.useRef(null);

  const [tilList, editTil] = useState([{
    subject: 'React',
    text: '오늘은 웹팩과 바벨 가지고 프로젝트를 세팅해봤다!',
    studyTime: '40'
  }]);

  const addnew = () => {
    let newtil =  {
      subject: subject_ref.current.value, 
      text: text_ref.current.value, 
      studyTime: studyTime_ref.current.value}
    editTil([...tilList, newtil])
  }


  return (
    <div className="App">
      <h1 style={{ marginLeft: '20px' }}> TIL </h1>
      {tilList.map((til, i) => {
        return (
          <TilItem key={i}>
            <h2> {til.subject} </h2>
            <p> {til.text}</p>
            <p> {Math.floor(til.studyTime/60/10)+''+Math.floor(til.studyTime/60)+':'+ Math.floor((til.studyTime%60)/10) +''+ til.studyTime%60%10 }</p>
          </TilItem>
        )
      })}
      <TilInputs>
        과목 <input type='text' ref={subject_ref} />
        내용 <input type='text' ref={text_ref} />
        공부시간 (min) <input type='number' ref={studyTime_ref} />
        <button onClick={() => {addnew()}}>추가하기</button>
      </TilInputs>
    </div>
  );
}

export default App;

const TilItem = styled.div`
  height: 200px;
  width: 500px;
  border: 1px solid #ddd;
  margin: 20px;
  padding: 10px;
`
const TilInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 1px solid #ddd;
  margin: 20px;
  padding: 10px;

  input {
    width: 70%;
    height: 20px;
    margin-bottom: 10px;
  }

  button {
    margin-top: 10px;
    width: 70%;
    height: 60px;
    color: #FFF;
    background-color: #0563b0;
    border-radius: 10px;
    outline: none;
    border: none;
    font-weight: 800;
    font-size: 16px;
  }
`