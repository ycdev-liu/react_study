import {useRef, forwardRef, useImperativeHandle} from "react"



// 父组件使用子组件
// 定义 ref 的类型接口
interface ChildRefType {
    myFn: () => void
}

const Child = forwardRef<ChildRefType>((props, ref) => {
    useImperativeHandle(
        ref,
        () => ({
            myFn: () => {
                console.log('子组件')
            }
        }),
        []
    )
    
    return (
        <div>
            子组件
        </div>
    )
})

export default function App5(){
    const childRef = useRef<ChildRefType>(null)  // 指定 ref 类型
    
    function handleClick() {
        childRef.current?.myFn()  // 现在 TypeScript 知道 myFn 存在了
    }

    return (
        <div>
            <Child ref={childRef}/>
            <button onClick={handleClick}>
                按钮
            </button>
        </div>
    )
}