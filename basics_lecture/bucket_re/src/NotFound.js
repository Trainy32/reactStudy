import React from "react";
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const NotFound = (props) => {
  const history = useHistory();

  return (
    <Wrap>
      <h3> 앗! 잘못된 접근이에요 </h3>
      <h5> 입력된 주소를 확인해주세요 </h5>
      <button onClick={() => history.goBack()}> 돌아가기 </button>
    </Wrap>
  )
}

const Wrap = styled.div `
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h3 {
    margin: 20px 0px 10px 0px;
  }

  h5{
    margin: 0px 0px 20px 0px;
    color:grey;
    font-weight: 500;
  }

`

export default NotFound