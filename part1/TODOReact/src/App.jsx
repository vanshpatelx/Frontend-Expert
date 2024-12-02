
import { useState } from "react"

function App() {
  const [todo, setTodo] = useState([{
    title: "hello",
    des: "ABCDHDeevfg fetwegwse",
    done: false
  }]);

  function addToDo() {
    setTodo([...todo, {
      title: document.getElementById("title").value,
      des: document.getElementById("des").value,
      done: false
    }])
    console.log(todo)
  }

  return (
    <>
      <input id="title" type="text" placeholder="title" />
      <input id="des" type="text" placeholder="des" />
      <br />
      <button onClick={addToDo}>Add to-do</button>
      <br />
      {todo.map((item, index) => (
        <ToDo key={index} {...item}></ToDo>
      ))}
    </>
  )
}

function ToDo({ title, des }) {
  return (<div>
    <h1>{title}</h1>
    <h5>{des}</h5>
  </div>)
}
export default App
