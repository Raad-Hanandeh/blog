
import axios from "axios";
import { useEffect, useState } from "react";



// const Aflams=()=>{

// const[post,setpost]=useState({});
// const[id,setid]=useState("")

// useEffect(()=>{
//     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then((res)=> setpost(res.data))

// })

// return(
//     <>

//     <div>

//      <input type="text" value={id} onChange={(e)=>setid(e.target.value)}/>
//  <h1>{post.title}</h1>
//     </div>
    
    
//     </>



// )




// }

    
const albums=()=>{

const [photos,setphotos]=useState([{}])
const [id,setId]=useState("")

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then((res)=> setphotos(res.data)
    )
},[id])

return(
    <>

    <div>
 <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
        <ul>
            {
               photos.map((photo)=>(

                <li>
                
                <h2>{photo.id}</h2>
            
                <h1>{photo.title}</h1>
                <p>{photo.url}</p>
                <span>{photo.thumbnailUrl}</span>

            </li>



               )) 
            }


            {/* <li>
                <h2>{photo.id}</h2>
                <h1>{photo.title}</h1>
                <p>{photo.url}</p>
                <span>{photo.thumbnailUrl}</span>

            </li> */}
               
            

        </ul>
    </div>
    
    
    </>
)


}
   


export default albums