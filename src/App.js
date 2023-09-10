import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")

    }
  }
  
  return (
    <>
    <Router>
    <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container">
       <Routes> {/*'exact' keyword is used to match exact path bcuz react does partial matching */}
          <Route exact path="/" element={<Textform heading= "Enter your text to analyze"/>}>
          </Route>
          <Route exact path="/about" element={<About/>}>
          </Route>
        </Routes>      
      </div>
    </Router>
     
    </>
  );
}

export default App;
