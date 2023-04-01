import './index.css';
import React, { useState, useEffect } from 'react';
import { Todos } from './components/todos/Todos';

function App() {

  const [tasks, setTasks] = useState([])
  const [states, setStates] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setTasks(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  return (
    <>
      <h1>To-do list</h1>
      <Todos
        tasks={tasks}
        // states={states}
      />
    </>
  );
}

export default App;
