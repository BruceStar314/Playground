import { useState} from "react";

function Test() {
const [name, setName] = useState("");

const handleChange = (e) => {
  setName(e.target.value) 
}

return (
  <div>
    <input type="text" value={name} onChange = {handleChange} placeholder="Enter your name..." />
    <p>You are {name}</p>
  </div>
)
}

export default Test
