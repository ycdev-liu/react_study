import {useMemo, useState} from "react"



// 防止子组件的 数据重新渲染

function DoSomeMath({value}:any){

    // 会造成子组件的重现渲染

    // console.log("dosomemath")
    // let result =0;
    // for (let i =0;i<=100000;i++){

    //     result +=value *2
    // }

    // 简单理解就是value发生变化时 重新渲染
    const result =useMemo(()=>{

        console.log("dosome")
        let result:number =0
        for (let i=0;i<10000;i++){
            result += value *2
        }
        return result
    },[value])
    return (
        <div>
            <p>输入内容：{value}</p>
            <p>经过复杂计算结果: {result}</p>
        </div>
    )


}
function App3(){
    const [inputValue, setInputValue] = useState(5);
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>count {count}</p>
            <button onClick={()=>setCount((count+1))}>
                点击更新
            </button>
            <br/>
            <br/>
            <input
            type="number"
            value ={inputValue}
            onChange={e=> setInputValue(parseInt(e.target.value))}
            />
            <DoSomeMath value={inputValue} />
        </div>
    )



}

export default  App3


