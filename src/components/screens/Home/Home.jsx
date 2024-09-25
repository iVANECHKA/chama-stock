import TodoItem from "./item/TodoItem"
import CreateTodoField from "./create-todo-field/CreateTodoField"
import { useState } from "react"

const data = [
    {
        _id: 'ef3g4g',
        title: 'Банка церия 100г',
        quantity: 200,
    },
    {
        _id: '289rcncrsd',
        title: 'Банка церия 200г',
        quantity: 300,
    },
    {
        _id: 'nvcslnd4893',
        title: 'Наклейка реборн 200г',
        quantity: 500,
    },
]
const Home = () => {

  const [todos, setTodos] = useState(data)  


  const removeTodo = id => setTodos(todos.filter(t => t._id != id))

  
  return (
      <div className="text-white w-4/5 mx-auto">
        <h1 className="text-2xl text-center mb-10 font-bold">ChamaStock</h1>
        <CreateTodoField setTodos={setTodos} />
        {todos.map(todo => (
            <TodoItem todo={todo} key={todo._id} quantity={todo.quantity} removeTodo={removeTodo}/>
        ))}
      </div>
  )
}

export default Home
