
import React from 'react'
import styles from './Todo.module.css'
import { RiTodoFill } from "react-icons/ri";

const Todo = ({todo, remove, id}) => {


  return  (
    <div className={styles.todo}>
      <RiTodoFill className={styles.todoIcons}/> 
      <div onDoubleClick={() => remove(id)} className={styles.todoText}>{todo}</div>
    </div>
  )
}

export default Todo

