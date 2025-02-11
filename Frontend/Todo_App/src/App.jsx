import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './Components/CreateTodo';
import { Todos } from './Components/Todos';



function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then(async function(res){
      const json = await res.json();
      console.log(json.todos);
      setTodos(json.todos);
    })

    
  return (
    <div>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos>
  </div>
  )
  
}

export default App
