import {useDispatch} from 'react-redux'
import {increment, decrement} from './redux/ducks/counter'

function Counter(props) {
  const dispatch = useDispatch()

  return (
    <div style={{background: "#ccc", padding: "10px 0 10px", borderRadius: "5px"}}>
      <div style={{display: "flex", gap: "1rem", justifyContent: "center"}}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export {Counter}