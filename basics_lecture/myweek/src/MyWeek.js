import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router"

const MyWeek = (props) => {
  const history = useHistory();
  const today = new Date().getDay();
  const dayList = ['일','월','화','수','목','금','토']
  const dayDisplay = Array.from({ length: 7 }, (d, i) => i);
  const circleDisplay = Array.from({ length: 5 }, (c, i) => i);
  const dayRates = Array.from({ length: 7 }, (d, i) => Math.ceil(Math.random(d)*(10/2)));
  console.log(dayRates)

  const [avgRate, setAvg] = React.useState(dayRates.reduce((s,c) => s+c / dayRates.length, 0));
  
  const resetAvg = () => { 
    if (avgRate !== 0) {
      setAvg(0) 
    } else {
      setAvg((dayRates.reduce((s,c) => s+c / dayRates.length, 0))) 
      // 0이 눌리면 리셋을 다시 눌러볼수 없는게 불편해서 추가
    }
  }

  return (
    <Wrap>
      <Title> 내 일주일은 ?</Title>

      {dayDisplay.map((d,i) => {  
          return (
          <Rows key={i}>
            <h3>{dayList[(today+i)%7]}</h3>

              { circleDisplay.map((c,j) => {
                  return(
                  <Circles 
                  key={j} 
                  style={{backgroundColor: j+1 > dayRates[i] ? "#eee" : "rgb(255, 235, 59)"
                }} />)}) }

            <Triangle onClick={() => { history.push('/detail/'+dayList[(today+i)%7]) }} />
          </Rows>
          ) 
        })
      }

      <WeekRate> 평균 평점 <br /> 
      {avgRate.toFixed(1)} 
      </WeekRate>
      <ResetBtn onClick={() => {resetAvg()}}> Reset </ResetBtn>

    </Wrap>
  )
};

const Wrap = styled.div`
display: flex;
flex-direction: column; 
align-itmes: center;
`

const Title = styled.h1`
  color: #111196;
  font-size : 1.6em;
  text-align: center;
  margin: 30px;
`;

const Rows = styled.div`
width: 80%
margin: auto;
display: flex;
align-items: center;
`

const Circles = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-left: 10px;
  background: #eee;
`;

const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 28px solid purple;
  margin-left: 10px;
`

const WeekRate = styled.h2`
  text-align: center;
  color: #111196;
  margin-top: 30px;
`

const ResetBtn = styled.button`
background-color: #ffef00;
font-size: 1.2em;
border: none;
border-radius: 10px;
padding: 20px 50px;
font-weight: bold;
margin: 0px auto;
`


export default MyWeek