


function TodoFilter({ setFilter }:any){


    return (
        <div>
            <button onClick={()=>setFilter("all")}>all</button>
            <button onClick={()=> setFilter("active")}>Acitve</button>
            <button onClick={()=> setFilter("completed")}>Completed</button>
        </div>
    )
}

export default TodoFilter