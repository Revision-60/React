import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Light1 from "./components/Light1/Light1";
import Light2 from "./components/Light2/Light2";
import CustomerPage from "./pages/CustomerPage";

function App() {
  return (
    <div className="App">
      <CustomerPage />
    </div>
  );
}

export default App;
