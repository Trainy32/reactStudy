// 답안은 Comp.js에 작성하였습니다.

import React, { useState, useEffect } from 'react';

// imitation of a request to the server. just get the number asynchronously
const generateRandomNumber = () => Promise.resolve(Math.random());

const Comp = () => {
  const [num, setNum] = useState();
  const [scroll, setScroll] = useState();
  
  useEffect(async () => {
    setNum(await generateRandomNumber());
    
    window.addEventListener('scroll', () => setScroll(window.scrollY));

    return () => window.removeEventListener('scroll', () => setScroll(window.scrollY));
  });
  
  return (
    <div>
      <div> Number: { num } </div>
      <div> Scroll: { scroll } </div>
    </div>  
  )
}