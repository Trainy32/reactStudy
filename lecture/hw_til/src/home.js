import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import axios from 'axios'

const Home = (props) => {

  const tilList = useSelector(state => state.tilList)

  
  const getTest = () => {
    axios.get('http://localhost:5001/mytil_list')
      .then((response) => {console.log(response.data)})
  }

  React.useEffect(() => {
    getTest()
  },[])

  return (
    <div>
      {tilList.map((til, i) => {
        return (
          <TilItem key={i}>
            <h2> {til.subject} </h2>
            <p> {til.text}</p>
            <p> {Math.floor(til.studyTime/60/10)+''+Math.floor(til.studyTime/60)+':'+ Math.floor((til.studyTime%60)/10) +''+ til.studyTime%60%10 }</p>
          </TilItem>
        )
      })}
    </div>
  )

}

const TilItem = styled.div`
  height: 200px;
  width: 500px;
  border: 1px solid #ddd;
  margin: 20px;
  padding: 10px;
`

export default Home