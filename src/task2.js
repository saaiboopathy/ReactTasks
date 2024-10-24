import { useState } from "react";

function Task2() {

    const [visibility, setMyVisibility] = useState(true)

    const handleChange=()=>{
        setMyVisibility(!visibility)
    }

    return (<div>
        {visibility ? <h1>Text is Shown</h1> : null}
        <button onClick={handleChange}>{
            visibility ? "Show text" : "Hide text"}</button>
    </div>)
}

export default Task2;