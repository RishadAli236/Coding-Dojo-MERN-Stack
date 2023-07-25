import { useState } from 'react'
import './App.css'
import Task from './components/Task'
import Display from './components/Display'

function App() {
  // Initialize piece of state to hold list of todo items
  const [todoList, setTodoList] = useState([])

  return (
    <>
    <h1>Todo List</h1>
    {/* Pass the todoList to components as props */}
      <Task 
        setTodoList = {setTodoList}
        todoList = {todoList}
      />
      <Display 
        todoList = {todoList}
        setTodoList = {setTodoList}
      />
    </>
  )
}

export default App
