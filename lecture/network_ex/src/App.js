import React from "react";
import axios from 'axios'

function App() {
  const myPingPong = () => {
    axios.get('http://localhost:5004/ping')
      .then((response) => {window.alert(response.data[0].is)})
  }

React.useEffect(()=>{
  myPingPong()
})


  // let data = {
  //   "day": "금",
  //   "sleep_time": "10:00"
  // }


  // const callWithAxios = () => {
  //   // axios({
  //   //   method: "get",
  //   //   url: "http://localhost:5001/sleep_times",

  //   // }).then(response => {console.log(response)})

  //   // axios.get('http://localhost:5001/sleep_times').then(response => {console.log(response)})
  //   axios.post('http://localhost:5001/sleep_times',data).then(response => {console.log(response)})

  // }



  // const callSomething = async () => {
  //   let data = {
  //     "day": "일",
  //     "sleep_time": "10:00"
  //   }

  //   const response = await fetch('http://localhost:5001/sleep_times', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type" : "application/json; charset=utf-8"
  //     },
  //     body: JSON.stringify(data),
  //   }); 
  //   console.log(response);
  // } 

  // React.useEffect (() => {

  //   callWithAxios()

  //   // callSomething()

  //   // const response = fetch('http://localhost:5001/sleep_times');
  //   // console.log(response)

  //   // let xhr = new XMLHttpRequest();
  //   // xhr.open('GET', 'http://localhost:5001/sleep_times')
  //   // xhr.send()

  //   // //XMLHttpRequest.readyState가 변경될때마다 콜백함수를 호출한다.
  //   // xhr.onreadystatechange = () => {
  //   //   if(xhr.readyState === 4) {
  //   //     console.log(xhr.responseText )
  //   //   }
  //   // }

  //   // xhr.onload = () => {
  //   //   console.log(xhr.responseText)
  //   // }
    
  // } )

  return (
    <div className="App">

    </div>
  );
}

export default App;
