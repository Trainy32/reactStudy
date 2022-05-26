import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom"

const Detail = (props) => {
  const history = useHistory();
  const [userRate, setRate] = React.useState(0);
  console.log(userRate)
  const circleDisplay = Array.from({ length: 5 }, (c, i) => i);
  const selectRate = (rateIdx) => {
    setRate(rateIdx + 1)
  }

  // // React.useEffect(() => {}, [])
  // window.onkeydown = (e) => console.log(e)

  window.onkeydown = (e) => {
    const keyInputs = ['1', '2', '3', '4', '5', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft']
    // 넣는 김에 화살표도 넣었습니다...

    if (keyInputs.includes(e.key)) {
      if (keyInputs.indexOf(e.key) < 5) {
        setRate(parseInt(e.key))
      } else if ((keyInputs.indexOf(e.key) === 5 || keyInputs.indexOf(e.key) === 6) && userRate < 5) {
        setRate(userRate + 1)
      } else if ((keyInputs.indexOf(e.key) === 7 || keyInputs.indexOf(e.key) === 8) && userRate > 0) {
        setRate(userRate - 1)
      }
    }

  }

  return (
    <Wrap>
      <Title><Highlight>{props.match.params.selectedDay}요일</Highlight> 평점 남기기</Title>
      <Ratings>
        {circleDisplay.map((c, i) => {
          return (
            <Circles key={i}
              onClick={() => { selectRate(i); }}
              style={{ backgroundColor: i + 1 > userRate ? "#eee" : "rgb(255, 235, 59)" }}
            />)
        })}
      </Ratings>
      <RatingBtn onClick={() => {
        if (userRate === 0) {
          alert('평점을 골라주세요')
        } else { history.push('/') }
      }}>
        평점 남기기
      </RatingBtn>
    </Wrap>
  )
};

const Wrap = styled.div`
display: flex;
flex-direction: column; 
margin: 20px auto
`

const Title = styled.h2`
  color: #111196;
  font-size : 1.6em;
  text-align: center;
  margin: 30px;
`;

const Highlight = styled.span`
  background: orange;
  padding: 3px 5px;
  border-radius: 5px;
  color: #fff;
`
const Ratings = styled.div`
margin: auto;
display: flex;
`

const Circles = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-left: 10px;
  /* background: #eee; */
`;

const RatingBtn = styled.button`
  background-color: purple;
  color: white;
  width: 100%;
  height: 50px;
  margin: 30px auto;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1em;
`



export default Detail;
