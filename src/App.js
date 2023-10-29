import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {

  const [count,setCount]=useState(0);

  function decrementHandler(){
    setCount(count-1);
  }
  function incrementHandler(){
  setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="App">
        <div class="inc-dec" >increment and decrement</div>
        <div class="counter">
          <button class="neg-button" onClick={decrementHandler}>-</button>
          <div class="count">
             {count}
          </div>
          <button class="pos-button" onClick={incrementHandler}>+</button>
        </div>
        <div class="reset" onClick={resetHandler}>reset</div>
    </div>
  );
}

export default App;
