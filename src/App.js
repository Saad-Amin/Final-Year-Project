import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout/MainLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
