import React from 'react'

const MyStore = React.createContext()

function App() {
  const [name, setName] = React.useState('')

  return (
    <div className="App">
      <MyStore.Provider value={{name, setName}}>
        <MyStore.Consumer>
          {(value) => {
            return (<p>내 이름은 {value.name}</p>)
          }}
        </MyStore.Consumer>
        <MyStoreConsumer/>
      </MyStore.Provider>
    </div>
  );
}
 
const MyStoreConsumer = () => {
  const { name, setName } = React.useContext(MyStore)
  return (
    <div>
      <button onClick={() => setName('수현')}> 이름 바꾸기 </button>
      <h1> {name}이의 context API 연습 </h1>
    </div>
  )
}

export default App;
