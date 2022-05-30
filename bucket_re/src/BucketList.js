import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const BucketList = (props) => {
  const history = useHistory();
  const my_lists = props.my_lists
  const my_wrap = React.useRef(null);

  return (
    <div ref={my_wrap}>
      { my_lists.map( (list, index) => (
        <ListItem  key={index} onClick={() => {history.push('/detail')}}> {list} </ListItem>
      ) ) }
    </div>
  );

}

const ListItem = styled.div `
  padding: 16px;
  margin: 16px 5px;
  background-color: aliceblue;
`


export default BucketList;