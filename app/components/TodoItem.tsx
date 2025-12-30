

"use client"
function TodoItem({todo,toggleTodo,deleteTodo}:any){
    // console.log(todo.text)


    return (
        <li style={{textDecoration: todo.completed ? 'line-through' :'none'}}>
            <a>{todo.text}</a>
            

            <button onClick={()=> toggleTodo(todo.id)}>complete</button>
            <button onClick={()=> deleteTodo(todo.id)}>delete</button>

        </li>
    )
}

export default TodoItem