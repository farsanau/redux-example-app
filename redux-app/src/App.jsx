import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';
import './App.css';

function App() {
  // Get the counter value from Redux state
  const count = useSelector((state) => state.value);

  // Get the dispatch function to send actions to the store
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Redux Counter</h1>
        <div className="counter">
          <button onClick={() => dispatch(decrement())}>-</button>
          <span>{count}</span>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;