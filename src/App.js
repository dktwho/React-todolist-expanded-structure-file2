import { useState } from 'react'
import './App.css';
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';




function App() {
  const [todos, setTodos] = useState([])
  
  function addTodoHandler(text) {
    setTodos([...todos, text])
  }

  function deleteTodoHandler(index) {
    setTodos(todos.filter((_, idx) => idx !== index))
  }


  return (
    <div className="App">
    <h1>Todo App</h1>
     <TodoForm addTodo={addTodoHandler} />
     <TodoList todos={todos} removeTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
