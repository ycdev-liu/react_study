


// 防止组件重现渲染

import { memo, useCallback, useState } from "react"




const Button = memo(
    function({ onClick}:any){
        console.log("Button 渲染了")
        return (
            <button onClick={onClick}>子组件</button>
        )
    
    }
)



function App4(){
    const [count , setCount] = useState(0)
    const handleClick = useCallback(
        () =>{
            console.log("点击按钮")
        },
        []
    )
    const handleUpdate=() =>{
        setCount(count+1)
    }

    return (
        <div>
            <p> Count :{count}</p>
            <button onClick={handleUpdate}>
            pass
            </button>
            
            <br/>
            <Button onClick= {handleClick}></Button>
        </div>
    )






}

export default App4