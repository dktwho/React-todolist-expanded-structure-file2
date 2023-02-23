

import React, { useState } from 'react'
import styles from'./TodoForm.module.css'

const TodoForm = ({addTodo}) => {
  const [text, setText] = useState('')
  const onSubmitHandler = (e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }
  return (
    <div className={styles.todoFormContainer}>
        <form action="" onSubmit={onSubmitHandler}>
        <input  type="text" placeholder='Enter new todo' value={text} onChange={(e) => setText(e.target.value) } />
        <button type="submit">Submit</button>
      </form>

    </div>

  )
}

export default TodoForm
