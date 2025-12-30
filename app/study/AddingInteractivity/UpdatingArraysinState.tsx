import {useState} from "react"

let nextId=0


interface Artist{
    id:number
    name:string
}

export default function UpdatingArraysinState(){


    const [name, setName]= useState('')
    const [artists,setArtists] = useState<Artist[]>([])

    function handleAddArtist(){
        if (!name.trim()) return ;
        setArtists(
            [
                ...artists,
                {
                    id:nextId++,
                    name:name
                }
            ]
        )
        setName("")

    }
    const deleteitem =(id:number)=>{
        setArtists(
            artists.filter(
                e=> e.id !== id
            )
            
        )

    }



    return (
        <div>
            <h1>inspiring sculptprs</h1>

            <input
            value ={name}
            onChange={
                e=>setName(e.target.value)
            }
            />
            <button onClick={handleAddArtist}>添加</button>

            <ul>
                {artists.map(
                    (artist)=>(
                        <li key={artist.id}>{artist.name}
                        
                        <button onClick={
                            ()=>
                                setArtists(
                                    artists.filter(
                                    a=>a.id!== artist.id
                                    )
                                )
                        }>
                            delete
                        </button>

                        <button
                        onClick={()=>deleteitem(artist.id)}
                        >
                            deleteitem


                        </button>
                        </li>
                    )

                )}

            </ul>



        </div>
    )

}