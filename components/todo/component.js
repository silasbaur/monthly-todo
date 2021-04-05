import React, { useState } from "react"
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'


import TodoForm from "../todo-form/component"
import TodoList from "../todo-list/component"

import styles from './styles.module.scss'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div className={styles.isComplete} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className={styles.icons}>
        <TiEdit 
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className={styles.edit_icon}
        />
        <RiCloseCircleLine 
          onClick={() => removeTodo(todo.id)}
          className={styles.delete_icon}
        />
      </div>
    </div>
  ))
}

export default Todo