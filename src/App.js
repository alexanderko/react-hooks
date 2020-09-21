import React, { useState } from 'react';
import './App.css';
import { Timer } from './Timer';

function useCounter(start = 0) {
  const [counter, setCounter] = useState(start);
  return [counter, () => { setCounter(counter + 1) }]
}

function useTextField(init, name) {
  const [value, setValue] = useState(init);
  return {
    value: value, 
    name: name,
    onChange: (e) => setValue(e.target.value)
  };
}

function buildObject(...fields) {
  const object = {};
  for (let field of fields) {
    object[field.name] = field.value
  }
  return object
}

function App() {
  const [counter, inc] = useCounter();
  const name = useTextField('', 'name');
  const minutes = useTextField('', 'minutes');
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

  function onSubmitTimerHandler(event) {
    event.preventDefault();
    let timerForm = buildObject(name, minutes);
    setTimers(
      [
        ...timers,
        {
          name: timerForm.name,
          duration: parseInt(timerForm.minutes) * 60
        }
      ]
    )
  }

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={inc}>Add</button>
      <h1>New Timer</h1>
      <form onSubmit={onSubmitTimerHandler}>
        <input type='text' {...name} />
        <input type='number' {...minutes} />
        <button type='submit'>Add timer</button>
      </form>
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
