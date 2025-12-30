

import {useRef, useState} from "react"


function Child(){
    return (
        <div>
            子组件
        </div>
    )
}


export default function App1(){
    
    const [count,setCount] = useState(0)

    const preCount = useRef(0)

    const inputRef = useRef(null)
    function handleClick(){

        preCount.current= count
        setCount(count +1)}

    function handleClick1(){
     
    }

    return (
        <div>
            <p>最新的Count :{count}</p>
            <p>上一次的count :{preCount.current}</p>
            <button onClick={handleClick}>增大 Count</button>

            <Child/>
            <button onClick={handleClick1}>按钮</button>

        </div>
    )
}