import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { HashRouter as Router } from "react-router-dom";

import "./index.css";

// => Context
import { AuthProvider } from "./context";

ReactDOM.render(
    <AuthProvider>
        <Router>
            <App />
        </Router>
    </AuthProvider>,
    document.getElementById("root")
);
