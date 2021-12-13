import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/material';
import AllTasks from './components/AllTasks';
import { useState } from 'react';
import { Header } from './components/Header';
import { eachHourOfInterval } from 'date-fns';
import bodyParser from 'body-parser';

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    const id = Math.floor(Math.random()*1000+1);
    console.log("id is: "+id);
    const taskToAdd = {id, ...task};
    console.log("task is: ", taskToAdd)
    setTasks([...tasks, taskToAdd])
  }
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id))
  }

  return (
    <Container maxWidth="sm" style={{padding:10}}>
      <Header onAdd={addTask}/>
      <AllTasks tasks={tasks} onRemove={removeTask}/>
    </Container>
  );
}

export default App;
