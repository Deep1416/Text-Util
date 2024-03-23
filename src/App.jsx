import { useReducer, useState } from "react";
import "./App.css";
import Screen from "./Compments/Screen/Screen";
import Header from "./Compments/Header/Header";
import Footer from "./Compments/Footer/Footer";
import About from "./Compments/About/About";
import Contact from "./Compments/Contact/Contact";
import Home from "./Compments/Home/Home";
import { BrowserRouter as Deependra, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Deependra>
        <Header />
        <Routes>
          <Route path="/" element={<Screen />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Deependra>
    </>
  );
}

export default App;
