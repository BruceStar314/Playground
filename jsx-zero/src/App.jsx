import "./CSS/App.css";
const Structure = () => {
  return  <div className="flex flext-col items-center justify-center h-screen w-full">
    <div className="bg-white p-8 rounded-lg shadow-lg text-black">
      <button>Add</button>
      <button>Edit</button>
      <button>Delete</button>
    <ul className="list-disc list-inside text-black">
        <li><input type="text" /></li>
        <li> <input type="text" /></li>
        <li> <input type="text" /></li>
        <li> <input type="text" /></li>
    </ul>
  </div>
  </div>
}
export default Structure