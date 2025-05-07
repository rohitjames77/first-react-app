import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Greetings, Svg } from "./greetings.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <Greetings />
      <Svg />
    </div>
  </StrictMode>
);
