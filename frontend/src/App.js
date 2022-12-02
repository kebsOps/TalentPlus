import {useState, useEffect} from 'react'

function App() {
  const[text, setText] = useState("")

  useEffect(()=>{
    fetch('http://localhost:3001/').then(async (res)=>{
     const message = await res.text()
     setText(message)
    })
  },[])

  return (
    <div>{text}</div>
  );
}

export default App;
