import React, { useState } from 'react';
import './App.css';
import { Timer } from './Timer';

function useCounter(start = 0) {
  const [counter, setCounter] = useState(start);
  return [counter, () => { setCounter(counter + 1) }]
}

function App() {
  const [counter, inc] = useCounter();
  const [timers, setTimers] = useState([
    {
      name: 'Torn off gas',
      duration: 5
    },
    {
      name: 'Workout',
      duration: 15 * 60
    }
  ]);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={inc}>Add</button>
      {
        timers.map(
          timer => <Timer key={timer.name} name={timer.name} duration={timer.duration}/>
        )
      }

      <button onClick={() => {setTimers(timers.slice(1));}}>Remove timer</button>
    </div>
  );
}

export default App;
