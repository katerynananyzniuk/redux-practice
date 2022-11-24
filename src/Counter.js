import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {increment, decrement} from './redux/ducks/counter'

function Counter({name}) {
  const dispatch = useDispatch()
  const [votes, setVotes] = useState(0)

  function handleIncrement() {
    dispatch(increment())
    setVotes(votes + 1)
  }

  function handleDecrement() {
    dispatch(decrement())
    setVotes(votes - 1)
  }

  return (
    <div style={{background: "#ccc", padding: "10px 0 10px", borderRadius: "5px"}}>
      <h2>{name}</h2>
      <h3>{`Votes: ${votes}`}</h3>
      <div style={{display: "flex", gap: "1rem", justifyContent: "center"}}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  )
}

export {Counter}