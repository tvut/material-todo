import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/material';
import AllTasks from './components/AllTasks';
import { useState } from 'react';
import { Header } from './components/Header';

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        name: "First Task",
        time: "November 11th, 2020"
      },
      {
        id: 2,
        name: "Second Task",
        time: "November 12th, 2020"
      }
    ]
  )

  return (
    <Container maxWidth="sm" style={{padding:10}}>
      <Header/>
      <AllTasks tasks={tasks}/>
    </Container>
  );
}

export default App;
