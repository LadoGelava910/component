import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
function App() {
  const [language, setLanguage] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<Authentication />} /> */}
          <Route
            path="/"
            element={<MainPage language={language} setLanguage={setLanguage} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
