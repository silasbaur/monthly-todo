// import Head from 'next/head'
import TodoList from "../components/todo-list/component"

export default function Home() {    

  return (
    <div className="wrapper">
      <main className="container">
      <TodoList />
      </main>
    </div>
  )
}
