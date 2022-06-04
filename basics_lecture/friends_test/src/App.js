import React from 'react'
import styled from 'styled-components'

import Start from './Start'

function App() {
  const [name, setName] = React.useState("르탄이")

  return (
    <Wrap>
      <Start name={name}/>
    </Wrap>
  );
}

const Wrap = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`


export default App;
