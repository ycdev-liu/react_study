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
import ReplaceItem from "./study/AddingInteractivity/ReplaceItem"
import InsertItem from "./study/AddingInteractivity/InsertItem"

// 前后端运行实例
import TodoListWithAPI from "./TodoListWithAPI";

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
    <TodoListWithAPI/>
    <p>{"-".repeat(100)}</p>



   <h1>TodoList 综合用例</h1>
   <AddTodo addTodo={addTodo}></AddTodo>
   <TodoList 
   todos={getFilterTodos()}
   deleteTodo ={deleteTodo}
   toggleTodo ={toggleTodo}
   
   />
   <TodoFilter setFilter={setfilter}></TodoFilter>


<p>{"-".repeat(100)}</p>
{/* 
  useReducer Hook 学习
  作用：用于管理复杂的状态逻辑，类似于 Redux 的 reducer 模式
  特点：
    - 通过 dispatch 派发 action 来更新状态
    - 适合处理多个子值的复杂状态
    - 可以集中管理状态更新逻辑
  示例：计数器应用，通过 increment/decrement action 更新状态
*/}
<p>useReducer使用 - 管理复杂状态逻辑，通过 dispatch 派发 action 更新状态</p>
  <App/>
  <p>{"-".repeat(100)}</p>
{/* 
  useRef Hook 学习
  作用：返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数
  特点：
    - ref 对象在组件的整个生命周期内保持不变
    - 修改 .current 属性不会触发组件重新渲染
    - 常用于保存前一个值、DOM 引用或定时器 ID
  示例：保存上一次的 count 值，不会因为 ref 变化而重新渲染
*/}
  <p>useRef使用 - 保存可变值且不触发重新渲染，常用于保存前一个值或 DOM 引用</p>
  <App1/>
  <p>{"-".repeat(100)}</p>
{/* 
  useEffect Hook 学习
  作用：处理副作用（side effects），如数据获取、订阅、手动修改 DOM 等
  特点：
    - 在组件渲染后执行
    - 可以指定依赖数组，只有依赖变化时才执行
    - 返回清理函数用于清除副作用
  示例：监听 count 变化，当 count 改变时执行副作用函数
*/}
  <p>useEffect使用 - 处理副作用，在组件渲染后执行，可监听依赖项变化</p>
  <App2/>
  <p>{"-".repeat(100)}</p>
{/* 
  useMemo Hook 学习
  作用：缓存计算结果，只有当依赖项变化时才重新计算
  特点：
    - 用于性能优化，避免不必要的重复计算
    - 返回缓存的值
    - 适合处理昂贵的计算操作
  示例：缓存复杂计算结果，只有当 inputValue 变化时才重新计算
*/}
  <p>useMemo使用 - 缓存计算结果，优化性能，避免不必要的重复计算</p>
  <App3/>
  <p>{"-".repeat(100)}</p>
{/* 
  useCallback Hook 学习
  作用：缓存函数，返回一个记忆化的回调函数
  特点：
    - 只有当依赖项变化时才返回新的函数引用
    - 配合 React.memo 使用，防止子组件不必要的重新渲染
    - 用于性能优化
  示例：缓存 handleClick 函数，配合 memo 防止 Button 组件不必要的重新渲染
*/}
  <p>useCallback使用 - 缓存函数引用，配合 memo 防止子组件不必要的重新渲染</p>
  <App4/>
  <p>{"-".repeat(100)}</p>
{/* 
  useImperativeHandle Hook 学习
  作用：自定义暴露给父组件的 ref 值，配合 forwardRef 使用
  特点：
    - 允许父组件通过 ref 调用子组件的特定方法
    - 可以限制暴露给父组件的功能
    - 用于实现命令式操作（如聚焦、滚动等）
  示例：父组件通过 ref 调用子组件的 myFn 方法，实现子组件方法的暴露
*/}
  <p>useImperativeHandle使用 - 自定义暴露给父组件的 ref，配合 forwardRef 实现父组件调用子组件方法</p>
  <App5/>
  <p>{"-".repeat(100)}</p>

  <h2>state study - 数组状态更新学习</h2>
  
{/* 
  数组状态更新 - 添加和删除数组项
  学习内容：
    - 使用扩展运算符 ... 添加新项到数组
    - 使用 filter 方法删除数组中的特定项
    - 不可变更新原则：创建新数组而不是修改原数组
  示例：艺术家列表的添加和删除操作
*/}
  <p>数组状态更新 - 添加和删除数组项（使用扩展运算符和 filter）</p>
  <UpdatingArraysinState/>
  <h2></h2>
{/* 
  数组状态更新 - 条件更新数组中的项
  学习内容：
    - 使用 map 方法遍历数组
    - 根据条件选择性更新数组中的某些项
    - 保持其他项不变，只更新符合条件的项
  示例：点击按钮时，只移动圆形小球，方形保持不变
*/}
  <p>数组状态更新 - 条件更新数组中的项（使用 map 根据条件更新）</p>
  <PlayBall/>
  <h2></h2>
{/* 
  数组状态更新 - 替换数组中的特定项
  学习内容：
    - 使用 map 方法根据索引替换特定项
    - 通过索引判断需要更新的项
    - 创建新数组，保持其他项不变
  示例：点击按钮时，只增加对应索引的计数器值
*/}
  <p>数组状态更新 - 替换数组中的特定项（使用 map 根据索引替换）</p>
  <ReplaceItem/>
  <h2></h2>
{/* 
  数组状态更新 - 在数组中插入新项
  学习内容：
    - 使用 slice 方法分割数组
    - 在指定位置插入新项
    - 使用扩展运算符组合数组片段
  示例：在数组的指定位置插入新的艺术家
*/}
  <p>数组状态更新 - 在数组中插入新项（使用 slice 和扩展运算符）</p>
  <InsertItem/>

  
   </div>
  )
}
