import React from "react";
import { useHistory } from 'react-router-dom'

const Detail = (props) => {
  const history = useHistory();

  return (
    <>
      <h2>상세페이지입니다.</h2>
      <button onClick={() => history.push('/')}> 돌아가기 </button>
    </>
  )
}

export default Detail;