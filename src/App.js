import {Counter} from './Counter'
import classes from './App.module.css'

function App() {
  return (
    <div className={classes.container}>
      <h1>Redux made easy</h1>
      {/* <h2>The count: </h2> */}
      <Counter />
    </div>
  );
}

export default App;
