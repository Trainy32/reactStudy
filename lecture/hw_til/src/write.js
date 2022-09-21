import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addTil} from './redux/modules/tilSlice'

const Write = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const subject_ref = React.useRef(null);
  const text_ref = React.useRef(null);
  const studyTime_ref = React.useRef(null);

  // const [tilList, editTil] = useState([{
  //   subject: 'React',
  //   text: '오늘은 웹팩과 바벨 가지고 프로젝트를 세팅해봤다!',
  //   studyTime: '40'
  // }]);

  const addnew = () => {
    let newtil =  {
      subject: subject_ref.current.value, 
      text: text_ref.current.value, 
      studyTime: studyTime_ref.current.value}

      console.log(newtil)
    dispatch(addTil(newtil))
  }

  return (
    <div>
      <TilInputs>
        과목 <input type='text' ref={subject_ref} />
        내용 <input type='text' ref={text_ref} />
        공부시간 (min) <input type='number' ref={studyTime_ref} />
        <button onClick={() => { addnew() }}>추가하기</button>
      </TilInputs>
      <button onClick={()=> navigate('/')}> 메인으로 돌아가기 </button>

    </div>
  )

}


const TilInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 1px solid #ddd;
  margin: 20px;
  padding: 10px;

  input {
    width: 70%;
    height: 20px;
    margin-bottom: 10px;
  }

  button {
    margin-top: 10px;
    width: 70%;
    height: 60px;
    color: #FFF;
    background-color: #0563b0;
    border-radius: 10px;
    outline: none;
    border: none;
    font-weight: 800;
    font-size: 16px;
  }
`

export default Write