import React from "react";
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Progress = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list)
  let count = 0;

  for (let i=0; i<bucket_list.length; i++) {
     if ( bucket_list[i].completed ) { count++ }}

  return (
    <ProgressBar>
      <Highlight width={(count/bucket_list.length)*100+'%'}/>
    </ProgressBar>
  )
}

const ProgressBar = styled.div`
 background-color: #eee;
 width: 100%;
 height: 30px;

`
const Highlight = styled.div`
 background-color: orange;
 transition: 1s width;
 width: ${(props) => props.width};
 height: 30px;

`




export default Progress
