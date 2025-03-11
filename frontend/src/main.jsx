import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Ensure you're using `react-dom/client`
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
