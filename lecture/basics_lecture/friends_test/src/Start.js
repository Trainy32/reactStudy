import React from 'react'
import styled from 'styled-components'
import rtan from './scc_img01.png'

const Start = (props) => {
  const name = props.name

  return (
    <Wrap>
      <img src={rtan} alt='르탄이'/>
      <h3>나는 <span>{name}</span> 에 대해서 <br/> 얼마나 알고 있을까?</h3>
      <input type='text' placeholder='내 이름' ></input>
      <button>시작하기</button>
    </Wrap>
  )
}

const Wrap = styled.div `
  display: flex;
  height: 70vh;
  width: 80vw;
  max-width: 350px;
  min-height: 600px;
  margin-top: 5vh;
  
  border: 1px solid #ddd;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 50vw;
    margin-bottom: 15px;
  }

  h3 {
    text-align: center;
    line-height: 200%;
  }

  span {
    background-color: #ffeca4;
    padding: 5px 14px;
    border-radius: 20px;
  }

  input {
    width: 60%;
    padding: 12px;
    border: none;
    border-radius: 30px;
    background-color: #eee;
    margin: 15px;
  }

  button {
    width: 40%;
    padding: 12px;
    border: none;
    border-radius: 30px;
    background-color: #A3A3E9;
    color: white;
    font-weight: 600;
    margin: 10px;
  }

  button:hover{
    background-color: #7171d7;
  }

`

export default Start