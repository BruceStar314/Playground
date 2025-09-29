import { createRoot } from "react-dom/client";
import "./CSS/index.css";
import Greeting from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Greeting/>
  </>
)
