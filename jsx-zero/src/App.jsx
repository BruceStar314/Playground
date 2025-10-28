// This component lets you add and remove colors from a list
// I did this on Arch Linux ARM and it was a pain in my ass!
import { useState } from "react"

export default function ColorManager() {
  const [colors, setColors] = useState([
    { id: 1, name: "Red" },
    { id: 2, name: "Blue" },
    { id: 3, name: "Green" }
  ])

  const addColor = (newColor) => {
    setColors([...colors, { id: colors.length + 1, name: newColor }])
  }

  const removeColor = (id) => {
    setColors(colors.filter(color => color.id !== id))
  }

  return (
    <div>
      <h2>Colors</h2>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            {color.name} 
            <button onClick={() => removeColor(color.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addColor("Yellow")}>Add Yellow</button>
    </div>
  )
}
