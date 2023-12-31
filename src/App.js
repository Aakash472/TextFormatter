import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark Mode has been Enabled.", "success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = "TextUtils  is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode has been Enabled.", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <BrowserRouter>
        <Navbar title="TextFormatter" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextFormatter - word counter || character counter || remove extra spaces" mode={mode} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;