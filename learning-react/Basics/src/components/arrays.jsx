// shouldn’t reassign items inside an array
//shouldn’t use methods that mutate the array, such as push() and pop()

import { useState } from "react"

export default function List(){
let nextid=0
const[point,setPoint]=useState(
    {
        task:'' ,
        id: 0
    }
)
const[click,setclick]=useState([])
function handleAdd(e){
    setPoint(
        {
            ...point,
            task: e.target.value

        }
    )
}
function handleClick(){
    setclick ([
        ...click,
        {task: point.task}
    ])
    setPoint({ task: "" })
    
}
function handleRemove(){
   click(setclick([]))
}
// function handleSingleRemove(){
// if(point.id!=id){
    
// }
// }
return(
<>
<label>
    Task :
    <input className='border border-solid'
    value ={point.task}
    onChange ={handleAdd}
    />
</label>
<button onClick={handleClick}>add</button>
    <ul>
        {click.map(clicks =>(//clicks is a variable
          <li key={point.id}>{clicks.task}</li>
          
        ))}
     <button onClick={handleRemove}>remove</button>
    </ul>
    
</>
)
}