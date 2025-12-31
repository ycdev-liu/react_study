

// API 基础配置
const API_BASE_URL = 'http://localhost:8000';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoCreate {
  text: string;
}

// 获取所有待办事项
export async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch(`${API_BASE_URL}/api/todos`);
  if (!response.ok) {
    throw new Error('获取待办事项失败');
  }
  return response.json();
}

// 创建待办事项
export async function createTodo(text: string): Promise<Todo> {
  const response = await fetch(`${API_BASE_URL}/api/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });
  if (!response.ok) {
    throw new Error('创建待办事项失败');
  }

  return response.json();
}

// 切换待办事项完成状态
export async function toggleTodo(id: number): Promise<Todo> {
  const response = await fetch(`${API_BASE_URL}/api/todos/${id}`, {
    method: 'PATCH',
  });
  if (!response.ok) {
    throw new Error('更新待办事项失败');
  }
  return response.json();
}

// 删除待办事项
export async function deleteTodo(id: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/todos/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('删除待办事项失败');
  }
}


// | 方法     | 作用      | 是否幂等 | 是否改数据 |
// | ------ | ------- | ---- | ----- |
// | GET    | 查询      | ✅    | ❌     |
// | POST   | 新建 / 执行 | ❌    | ✅     |
// | PATCH  | 局部修改    | ❌    | ✅     |
// | PUT    | 整体替换    | ✅    | ✅     |
// | DELETE | 删除      | ✅    | ✅     |


import axios from 'axios'

//  使用axios 重写
// // 获取所有待办
// export const fetchTodos = async (): Promise<Todo[]> => {
//   const { data } = await api.get<Todo[]>('/api/todos');
//   return data;
// };

// // 创建
// export const createTodo = async (text: string): Promise<Todo> => {
//   const { data } = await api.post<Todo>('/api/todos', { text });
//   return data;
// };

// // 切换状态
// export const toggleTodo = async (id: number): Promise<Todo> => {
//   const { data } = await api.patch<Todo>(`/api/todos/${id}`);
//   return data;
// };

// // 删除
// export const deleteTodo = async (id: number): Promise<void> => {
//   await api.delete(`/api/todos/${id}`);
// };