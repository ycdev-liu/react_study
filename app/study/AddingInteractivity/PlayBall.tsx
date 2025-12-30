
import {useState} from "react"

let initialShapes = [
    {id: 0, type: 'circle', x: 50, y: 100},
    {id: 1, type: "square", x: 150, y: 100},  // 修复：squre 改为 square
    {id: 2, type: "circle", x: 250, y: 100},
]

export default function PlayBall(){
    const [shapes, setShapes] = useState(initialShapes)

    function handleClick(){
        const nextShape = shapes.map(  // 修复：使用 shapes 而不是 initialShapes
            shape => {
                if (shape.type === "square"){  // 现在匹配正确的拼写
                    return shape;
                } else {
                    return {
                        ...shape,
                        y: shape.y + 50
                    }
                }
            }
        )
        setShapes(nextShape)  // 修复：添加状态更新
    }

    return (
        <>
            <button onClick={handleClick}>
                小球移动
            </button>
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    style={{
                        background: 'purple',
                        position: 'absolute',
                        left: shape.x,
                        top: shape.y,
                        borderRadius:
                            shape.type === 'circle'
                                ? '50%' : '',
                        width: 20,
                        height: 20,
                    }} />
            ))}
        </>
    )
}