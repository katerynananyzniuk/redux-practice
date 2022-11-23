import {useState} from 'react'

function Counter(props) {
  const [counter, setCounter] = useState(0)

  return (
    <div style={{background: "#ccc", padding: "10px 0 30px", borderRadius: "5px"}}>
      <h2>Counter: {counter}</h2>
      <div style={{display: "flex", gap: "1rem", justifyContent: "center"}}>
        <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
        <button onClick={() => setCounter(prev => prev - 1)}>Decrement</button>
      </div>
    </div>
  )
}

export {Counter}