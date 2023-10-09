import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const rootEl = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEl);
root.render(<App />);
