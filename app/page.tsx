"use client"
import { useState } from "react";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import { Todo } from "./data/type";

import App from "./App";
import App1 from "./App1"
import App2 from "./App2";

import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";



import UpdatingArraysinState from "./study/AddingInteractivity/UpdatingArraysinState";

import PlayBall from "./study/AddingInteractivity/PlayBall";

export default function Home() {
  const [todos,setTodos] =  useState<Todo[]>([])
  const [filter, setfilter] = useState("all")
  const addTodo =(text: string)=>{
    const newTodo={
      id:Date.now(),
      text,
      completed:false
    }
    setTodos([...todos,newTodo])
  }
  // 删除
  const deleteTodo =(id:number) =>{
    setTodos(todos.filter(todos=>todos.id !== id))
  }
  // 进行完成设置
  const toggleTodo =(id:number) =>{
    setTodos(todos.map(todo=>{
      if (todo.id===id){
        todo.completed = !todo.completed
      }
      return  todo
    }))
}




const getFilterTodos =() =>{
  switch(filter){

    case "all":
      return todos
    
    case "completed":
      return todos.filter(todo=> todo.completed)
    
    case "active":
      return todos.filter(todo=> !todo.completed)
    
    default:
      return todos;


  }
}


  return (
    <div>
   <h1>TodoList 综合用例</h1>
   <AddTodo addTodo={addTodo}></AddTodo>
   <TodoList 
   todos={getFilterTodos()}
   deleteTodo ={deleteTodo}
   toggleTodo ={toggleTodo}
   
   />
   <TodoFilter setFilter={setfilter}></TodoFilter>


<p>{"-".repeat(100)}</p>
<p>useReducer使用</p>
  <App/>
  <p>{"-".repeat(100)}</p>
  <p>useRef使用</p>
  <App1/>
  <p>{"-".repeat(100)}</p>
  <p>useEffect使用</p>
  <App2/>
  <p>{"-".repeat(100)}</p>
  <p>useMeno使用</p>
  <App3/>
  <p>{"-".repeat(100)}</p>
  <p>useCallback使用</p>
  <App4/>
  <p>{"-".repeat(100)}</p>
  <p>useImperativeHandle使用</p>
  <App5/>
  <p>{"-".repeat(100)}</p>

  <h2>state study</h2>
  
  <UpdatingArraysinState/>
  <h2></h2>
  <PlayBall/>
   </div>
  )
}
