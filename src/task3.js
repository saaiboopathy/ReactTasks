import { useState } from "react"


function Task3() {

    const [name, setName] = useState("")

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (<div>
        <form>
            <br></br>
            <br></br>
            <label>Name :
                <input value={name} onChange={handleChange} placeholder="Enter your name"></input>
            </label>
        </form>

        <h1>{name}</h1>

    </div>)
}

export default Task3