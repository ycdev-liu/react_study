import { useState } from "react"

let initialCounters: number[] = [0, 0, 0]

export default function ReplaceItem() {
    const [counters, setCounters] = useState<number[]>(initialCounters)


    function HandleIncrementClick(index:number){
        const nextCounters = counters.map((c,i)=>{

            if (i=== index){
                return  c+1
            }else{
            return c
            }
        })
        setCounters(nextCounters)

    }

    return (
    <ul>
        {counters.map((counter,i)=>(
            <li key ={i}>
                {counter}
                <button onClick={()=>{HandleIncrementClick(i)}}>+1</button>
            </li>
        ))}        


    </ul>
)}
