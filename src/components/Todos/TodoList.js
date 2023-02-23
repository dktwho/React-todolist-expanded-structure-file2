
import React from 'react'
import Todo from './Todo'
import styles from './TodoList.module.css'

const TodoList = ({todos, removeTodo}) => {
  return (
    
    <div className={styles.todoListContainer}>
      {!todos.length &&  <h2>Todolist is empty</h2> }
      {todos.map((todo, id) => {
        return <Todo key={id} todo={todo} remove={removeTodo} id={id}/>
      })}
    </div>
  )
}

export default TodoList
