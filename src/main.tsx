import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { MotionProvider } from "./components/motion/MotionProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MotionProvider>
      <App />
    </MotionProvider>
  </React.StrictMode>,
);

