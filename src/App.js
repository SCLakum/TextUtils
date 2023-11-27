import "./App.css";
import Navbar from './Componets/Navbar.js';
import TextForm from './Componets/TextForm.js';
import { useState } from "react";
import About from "./Componets/About.js";
import Footer from './Componets/Footer.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");
  const appName = "Text Utils";
  const aboutApp = "word counter and converter";

  document.title = appName+" - "+aboutApp;
  const ChangeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.documentElement.setAttribute('data-bs-theme', 'light');
    } else {
      setTheme('dark');
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    }
  }
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar title={appName} mode={theme} ChangeTheme={ChangeTheme} />}>
          <Route index element={<TextForm headerName="Enter text to analyze below" theme={theme}/>} />
          <Route path="about" element={<About title={appName}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer title={appName}/>
    </>
  );
}

export default App;
