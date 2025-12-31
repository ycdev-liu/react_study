import {useState} from "react"



const initialList =[
    {id:0 , title :'liuyanchao',seen:false},
    {id:1 , title :"liufeihe",seeen:false},
    {id:2 ,title :"zhangsan",seen:false}
]



interface ItemList{
    id:number,
    title:string,
    seeen:boolean
}

export default function BucketList(){
    const [myList, setMylist] = useState(initialList)
    const [yourList, setYourList] = useState(
        initialList

    )
    function handleToggleMYList(artworkId,nextSeen){
        setMylist(myList.map(artwork=>{
            if(artwork.id === artworkId){
                return {...artwork, seen:nextSeen}
            } else{
                return artwork;
            }


        }))}
    function handleTogglleYpo


    return (
        <>
        <h1>艺术愿望清单</h1>
        <h2>我想看的艺术清单</h2>
        <ItemList
        artwortks ={myList}
        onToggle ={handleTogg}


        
        />

        </>
    )



}


function ItemList({artworks,onToggle}:any){
    return (
        <ul>
            {artworks.map(artwork=>(

                <li key={artwork.id}>
                <label>
                <input
                type="checkbox"
                checked ={artwork.seen}
                onChange={e=>{
                    onToggle(
                        artwork.id,
                        e.target.checked
                    )
                }}



                />

                </label>


                </li>

            ))}
        </ul>

    )
}