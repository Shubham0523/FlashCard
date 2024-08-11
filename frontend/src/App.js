import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FlashcardList from "./components/FlashcardList";
import AdminDashboard from "./components/AdminDashboard";
import "./App.css";
import './styles/tailwind.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FlashcardList />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
