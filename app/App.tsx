"use client"
import {useReducer, useState} from "react"

// useReducer 使用
function countReducer(state:number,action:{type:string}){
    switch (action.type){
        case"increment":
            return state+1

        case "decrement":
            return state-1     
            
        default:
            throw new Error()
        }

}

export default function App(){
    // const [count , setCount] = useState(0)
    // const handleIncrement =()=>setCount(count +1)
    // const handleDecrement =()=>setCount(count-1)
    const [state ,dispatch]=useReducer(countReducer,0)
    const handleIncrement = () => dispatch({type:"increment"})
    const handleDecrement =() => dispatch({type:"decrement"})

    return (
        <div style={{padding:10}}>
            <button onClick={handleIncrement}>+</button>
            <span>{state}</span>
            <button onClick={handleDecrement}>-</button>

        </div>
    )

}