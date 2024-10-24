import { useState } from "react"

function Task1() {

    const [number,setMyNumber]=useState(0)

    const handleAdd = ()=>{
        setMyNumber(number+1)
    }

    return (<div>
        <h1>{number}</h1>
        <button onClick={handleAdd}>Add</button></div>
    )
}

export default Task1