import './index.css';
import { useState, useEffect } from 'react';
import { Todos } from './components/todos/Todos';
import { SearchBar } from './components/searchBar/SearchBar';

function App() {

  const [tasks, setTasks] = useState([])
  const [search, setSearch] = useState('')
  
  const handleDelete = (id) => {
    setTasks((prevState) => prevState.filter((tasks) => tasks.id_task !== id));
  };
  
  useEffect(() => {
    fetch('http://localhost:3001/api', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => {
      setTasks(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  return (
    <>
      <h1>To-do list</h1>
      <SearchBar
        setSearch={setSearch}
      />
      <Todos
        tasks={tasks}
        onClick={handleDelete}
        setTasks={setTasks}
        search={search}
      />
    </>
  );
}

export default App;
