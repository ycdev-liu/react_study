

"use client"
import { useState } from "react";

interface AddTodoProps{
    addTodo:(text:string) =>void

}

function AddTodo({addTodo}:AddTodoProps){

    const [text, setText] = useState('')

    const handleSumit =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if (text.trim()=== ''){
            return 
        }
        addTodo(text)
        setText("")
    }

    return (
        <form onSubmit={handleSumit}>
            <input
            type="text"
            value ={text}
            onChange ={(e)=>setText(e.target.value)}   
            />
            <button type="submit">create</button>
        </form>

        
    )
}

export default AddTodo