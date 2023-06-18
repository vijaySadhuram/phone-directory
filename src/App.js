import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import Appcomponents from "./components/header"; 
function App() {
 return (
    <div id="header">
     good morning <Appcomponents name={"vijay"}/> <Appcomponents name={"sadhuram"}/>
    </div>
  );
}
export default App;
