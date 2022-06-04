import React from "react";

export const One = () => {
  const [someValue, setValue] = React.useState(1);
  const input_ref = React.useRef(null);

  React.useEffect(() => {
    console.log('숫자가 올라갔어!')
  }, [someValue])

  React.useEffect(() => {
    console.log('나 여기있어!')
  }, [])

  const logger = React.useCallback(() => {
    console.log('나 메모이제이션 된 함수야!')
  },[])

  return (
    <div>
      <p>{someValue}</p>
      <button onClick={() => setValue(someValue+1)}>바꾸기</button>
      <Two logger={logger} />

      <div>
        <input ref={input_ref}/>
        <button onClick={()=> {
          console.log(input_ref)
          input_ref.current.value = '바꿨어요!'
          } }> 인풋 값 보기</button>
      </div>
    </div>
  )
}

export const Two = ({logger}) => {
  return (
    <button onClick={logger}> 콘솔 남기기 </button>
  );
}