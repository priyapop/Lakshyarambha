// shouldn’t reassign items inside an array
//shouldn’t use methods that mutate the array, such as push() and pop()

import { useState,useRef  } from "react"

export default function List(){
let nextId= useRef(0)
const[point,setPoint]=useState(
    {
        task:'' 
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
        {task: point.task,  id: nextId.current++ }
    ])
    setPoint({ task: ""})
    
}
function handleRemove(){
   setclick([])
}
function handleSingleRemove(id) {
  setclick(click.filter(item => item.id != id));
}

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
          <li key={clicks.id}>{clicks.task} <button onClick={()=>handleSingleRemove(clicks.id)}>remove</button></li>
          
        ))}
     <button onClick={handleRemove}>remove</button>
    </ul>
    
</>
)
}