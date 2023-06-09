import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert ';
import About from './components/About';

// will be implemented later
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, SetMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState(null);
  const displayAlert = (message, type) => {
    setAlert({
      mgs: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      SetMode("dark");
      document.body.style.backgroundColor = color;
      document.body.style.color = "white";
      displayAlert(`Dark Mode Enabled!`, "success");
      setColor("#000000");
    }
    else {
      SetMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      displayAlert("Light Mode Enabled!", "success");
      setColor("#FFFFFF");
    }
  }
  function invertColor(hex) {
    function padZero(str, len) {
      len = len || 2;
      var zeros = new Array(len).join('0');
      return (zeros + str).slice(-len);
    }
    if (hex != null) {
      if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
      }
      // convert 3-digit hex to 6-digits.
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
      }
      // invert color components
      var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
      // pad each with zeros and return
      return '#' + padZero(r) + padZero(g) + padZero(b);
    }
  }

  document.body.style.backgroundColor = color;
  return (
    <>
      {/* <Navbar title="TextUtils" aboutTitle="About Us"/> */}
      {/* <Navbar /> */}
      <Router>
        <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} color={color} setColor={setColor} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={
            <>
              <div className="container my-3">
                <TextForm heading="Enter the Text to Analyze" mode={mode} displayAlert={displayAlert}
                  invertColor={invertColor} colorBackground={color} />
              </div>
            </>} />
          <Route exact path="/about" element={
            <About mode={mode} colorBackground={color} invertColor={invertColor} />
          } />
        </Routes>
      </Router >
    </>
  );
}

export default App;
