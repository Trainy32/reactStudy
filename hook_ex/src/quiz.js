import React from 'react'
import useCompletes from './useCompletes'

export const Texts = () => {
  // const [myText, setText] = React.useState('헤엑')
  const [myText, changeText] = useCompletes('')

  const myInput = React.useRef(null)

  return (
    <div>
      <div style={{width:'300px', height:'150px', textAlign:'center', padding:'10px', border: '1px solid gray', marginBottom:'20px'}}>
        <p>{myText}</p>
      </div>
      <InputBox myInput={myInput}/>
      <CompleteBtn myInput={myInput} setText={changeText}/>
    </div>
  )
}

const InputBox = ({myInput}) => {
  return (
    <input ref={myInput} type='text'/>
  )
}

const CompleteBtn = ({myInput, setText}) => {
  return (
    <button onClick={() => {
      // setText(myInput.current.value)
      setText(myInput)
    }}>완성!</button>
  )
}