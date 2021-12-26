import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Context
// import { AppProvider } from "./store";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);