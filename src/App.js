import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Error from "./components/Error";

import "./App.css";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
