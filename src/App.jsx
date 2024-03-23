import { useReducer, useState } from "react";
import "./App.css";
import Home from "./Compments/Home/Home";
import Footer from "./Compments/Footer/Footer";
import Contact from "./Compments/Contact/Contact";
import Header from "./Compments/Header/Header";

const initialState = {
  text: "",
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "text":
      return {
        ...state,
        text: action.payload,
      };
    case "upper":
      return {
        ...state,
        text: state.text.toUpperCase(),
      };
    case "lower":
      return {
        ...state,
        text: state.text.toLowerCase(),
      };
    case "clear":
      return {
        ...state,
        text: "",
      };
    case "trim":

      return {
        ...state,
        text :state.text.trim().split(/\s+/).join(" ")
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {/* <Home text={state.text} dispatch={dispatch} /> */}
      {/* <Footer/> */}
      {/* <Contact/> */}
      <Header/>
    </>
  );
}

export default App;
