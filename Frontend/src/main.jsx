// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";


// //import Home from "./pages/Home.jsx";
// // hoặc:
//  import HomePage from "./pages/Home.jsx"; // nếu file export default HomePage

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//      <HomePage />
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
