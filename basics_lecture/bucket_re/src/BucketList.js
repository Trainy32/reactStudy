import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BucketList = (props) => {
  const history = useHistory();
  const my_lists = useSelector( (state) => state.bucket.list )
  console.log(my_lists)
  // const my_lists = props.my_lists
  const my_wrap = React.useRef(null);

  return (
    <div ref={my_wrap}>
      { my_lists.map( (list, index) => ( 
        <ListItem completed={list.completed} key={index} 
        onClick={() => {history.push('/detail/'+index)}}> {list.bucket_text} </ListItem>
      ) ) }
    </div>
  );

}

const ListItem = styled.div `
  padding: 16px;
  margin: 16px 5px;
  background-color: ${(props) => props.completed ? 'orange' : 'aliceblue'};
`


export default BucketList;