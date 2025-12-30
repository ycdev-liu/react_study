import {useState} from "react"
let nextId=3

interface Artist{
    id:number
    name:string
}

const initialArtists =[
    {id:0, name :"liuyanchao"},
    {id:0, name:"lanshimei" },
    {id:2,name:"tancong"}
]

export default function InsertItem(){
    const [name,setName] = useState('')
    const [artists,setArtists] = useState<Artist[]>(
        initialArtists

    );

    function handleClick(){
        const insertAt = 2;
        const nextArtists =[
            ...artists.slice(0,insertAt),
            {id:nextId++,name:name},
            ...artists.slice(insertAt)
        ]
        setArtists(nextArtists)
        setName('');
    }

    return (
        <>
        
        <h1>勇敢的人</h1>
        <input
        value ={name}
        onChange={e=>setName(e.target.value)}/>
        <button onClick={handleClick}>
            插入
        </button>
        <ul>
            {artists.map(artist=>(
                <li key={artist.id}>{artist.name}</li>
            ))}
        </ul>


        </>
    )




}