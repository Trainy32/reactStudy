import React from "react";

const useCompletes = (initial = '') => {
  // ref값 가져온걸로, state를 바꿔주자!

  const [text, setText] = React.useState(initial)

  const changeText = (_ref) => {
    // const value = _ref.current?.value
    const value = _ref.current ? _ref.current.value : ''

    if (value && value !== '') {
      setText(value);
      _ref.current.value=''
    }
  }

  return [text, changeText]
}

export default useCompletes