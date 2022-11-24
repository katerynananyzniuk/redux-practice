import {Counter} from './Counter'
import classes from './App.module.css'
import {useSelector} from 'react-redux'

function App() {
  const count = useSelector(state => state.counter.count)

  return (
    <div className={classes.container}>
      <h1>Redux made easy</h1>
      <h2>The count: {count}</h2>
      <Counter />
    </div>
  );
}

export default App;
