import React, { useState, useEffect, useRef } from "react"

import styles from './styles.module.scss'

const TodoForm  = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus
  })

  const handleChange = e => {
    setInput(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    })

    setInput('')
  }

  return (
    <form className={styles.todo_form} onSubmit={handleSubmit}>
      {props.edit ? (
        <div className={styles.todo_input_container}>
          <input 
            type="text" 
            placeholder="Update todo" 
            value={input}
            onChange={handleChange}
            name="text" 
            className={styles.todo_input}
            ref={inputRef}
          />
          <button className={styles.btn}>Update</button>
        </div>
      ) : (
        <div className={styles.todo_input_container}>
          <input 
            type="text" 
            placeholder="Add a todo" 
            value={input}
            onChange={handleChange}
            name="text" 
            className={styles.todo_input}
            ref={inputRef}
          />
          <button className={styles.btn}>Add todo</button>
        </div>
      )
      
    }

    </form>

  )
}

export default TodoForm