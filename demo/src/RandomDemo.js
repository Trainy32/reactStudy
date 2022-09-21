import React, { useState, useEffect } from "react";

// imitation of a request to the server. just get the number asynchronously
export const generateRandomNumber = () => Promise.resolve(Math.random());

const Comp = () => {
  const [num, setNum] = useState();
  const [scroll, setScroll] = useState();

  const n = 0
  const randomNum = parseInt(require('crypto').randomBytes(n.toString().length).toString('hex'), 16)

  const getNum = async () => {
    setNum(await generateRandomNumber());
  };

  useEffect(() => {
    getNum();

    const timer = setInterval(() => {
      window.addEventListener("scroll", () => setScroll(window.scrollY));
    }, 500);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", () => setScroll(window.scrollY))
    };
  }, []);


  return (
    <div>
      <div style={{position:'fixed', width:'100%', textAlign:"center"}}>
        <div> Number: {num} </div>
        <div> Scroll: {scroll} </div>
      </div>

      {Array.from({length:40}, (item, idx) => idx).map(i => <p key={i}>.</p>) }

    </div>
  );
};

export default Comp;