import React, { useRef } from 'react';
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import BucketList from './BucketList';
import Detail from './detail';
import NotFound from './NotFound';

function App() {
  const [my_lists, setLists] = React.useState(['a', 'b', 'c'])
  const text = useRef(null);

  const addBucket = () => { setLists([...my_lists, text.current.value]) }

  return (
    <MyApp>
      <Container>
        <h1> 내 버킷리스트 </h1>
        <hr className='line' />

        <Switch>
          <Route path='/' exact>
            <BucketList my_lists={my_lists} />
          </Route>

          <Route path='/detail'>
            <Detail />
          </Route>

          <Route> <NotFound /> </Route>
        </Switch>

      </Container>

      <InputWrap>
        <Route path='/' exact>
          <input ref={text} type='text'></input>
          <button onClick={addBucket}> 추가하기 </button>
        </Route>
      </InputWrap>

    </MyApp>
  );
}

const MyApp = styled.div`
  background-color: #eee;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  height: 60vh;
  margin: 10px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;

  h1 {
    color: slateblue;
    text-align: center;
  }

  hr {
    margin: 16px 0px;
    border: none;
    border-top: 1px dotted grey;
  }
`

const InputWrap = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  height: 4vh;
  margin: 0px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex ;
  justify-content: center;
  align-items: center;

  input {
    height: 25px;
    width: 60%;
    margin-right: 10px;
  }

  button {
    height: 30px;
    width: 30%;
  }
`

export default App;
