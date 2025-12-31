"use client"
import { useState, useEffect } from "react";
import { fetchTodos, createTodo, toggleTodo, deleteTodo, Todo } from "./api/todoApi";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

export default function TodoListWithAPI() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 组件加载时获取数据
  useEffect(() => {
    loadTodos();
  }, []);

  // 从 API 加载待办事项
  const loadTodos = async () => {
    try {
      setLoading(true);
      const data = await fetchTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : '加载失败');
    } finally {
      setLoading(false);
    }
  };

  // 添加待办事项
  const addTodo = async (text: string) => {
    try {
      // 注意前后端同步的问题不要出现key重复的问题
      // 如果 key 相同，React 认为这是同一个组件
      // 组件内部的状态（useState, useRef等）会被保留
      // 这会导致：
      // - 输入框的值混乱
      // - 动画状态错误
      // - 事件处理器绑定错误
      // 这次原因就是前后端没有同步 
      const newTodo = await createTodo(text);
      console.log(newTodo)
      setTodos([...todos, newTodo]);
    } catch (err) {
      setError(err instanceof Error ? err.message : '创建失败');
    }
  };

  // 切换完成状态
  const handleToggleTodo = async (id: number) => {
    try {
      const updatedTodo = await toggleTodo(id);
      console.log("one")
      console.log(updatedTodo)

      setTodos(todos.map(todo => 
        todo.id === id ? updatedTodo : todo
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : '更新失败');
    }
  };

  // 删除待办事项
  const handleDeleteTodo = async (id: number) => {
    try {
      // 返回你没有报错 前端就直接删除
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : '删除失败');
    }
  };

  // 过滤待办事项
  const getFilterTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "completed":
        return todos.filter(todo => todo.completed);
      case "active":
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  };

  if (loading) {
    return <div>加载中...</div>;
  }

  return (
    <div>
      <h1>TodoList (FastAPI 集成)</h1>
      {error && <div style={{ color: 'red' }}>错误: {error}</div>}
      
      <AddTodo addTodo={addTodo} />
      <TodoFilter setFilter={setFilter} />
      <TodoList 
        todos={getFilterTodos()} 
        toggleTodo={handleToggleTodo}
        deleteTodo={handleDeleteTodo}
      />
    </div>
  );
}