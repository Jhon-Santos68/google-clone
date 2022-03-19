import React from 'react'
import Home from './Home';
import './App.css';
import SearchPage from './SearchPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/search" element={<SearchPage />}>
          
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
