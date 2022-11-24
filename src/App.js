import {Counter} from './Counter'
import classes from './App.module.css'
import {useSelector} from 'react-redux'

function App() {
  const count = useSelector(state => state.counter.count)
  const voters = ["Kateryna", "Maksim", "Elena"]
  return (
    <div className={classes.container}>
      <h1>Redux made easy</h1>
      <h2>Total Votes: {count}</h2>
        {voters.map(voter => {
          return (
            <Counter name={voter} />
          )
        })}
    </div>
  );
}

export default App;
