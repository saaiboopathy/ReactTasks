import { useState } from "react"

function Task5() {

        const [listofitems, setmylist] = useState([])
    
        const [item, setmyitem] = useState("")
    
        const [colorst, setmycolor] = useState(false)
    
        const handleIp = (event)=>{
            setmyitem(event.target.value)
        }
    
        const handleAdd = ()=>{
            setmylist([...listofitems,item])
            setmyitem("")
            setmycolor(!colorst)
        }
    
        
    
        return(<div>
            <h3>Shopping list</h3>
            <input value={item} onChange={handleIp} placeholder="Enter the items"></input>
            <button onClick={handleAdd}> Add </button>
            {
                listofitems.map(function (items) {
                    return <li style={{color:colorst?"red":"green"}}>{items}</li>
                })
            }
        </div>)
    }
    

export default Task5