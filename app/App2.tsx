import { useEffect, useState } from "react";


export default function App2(){
    const [count, setCount] = useState(0)
    const handleIncrement =() => setCount(count+1)
    const handleDecrement =() => setCount(count+1)

    useEffect(
        ()=>{
            // console.log("任何依赖变更不会"
            console.log("count发生变化然后执行")
        },
        // []
        [count]
    )

    return (
        <div>

            <button onClick={
                handleIncrement
            }>
                +
            </button>
            <span>{count}</span>

            <button onClick={
                handleDecrement
            }>
                -
            </button>
      
        </div>
    )
    


}