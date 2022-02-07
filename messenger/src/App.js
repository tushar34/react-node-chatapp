import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Chat from "./pages/Chat";
import Join from "./pages/Join";
function App() {
  // const socket = io.connect("http://localhost:8000");


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/Chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
