import { useReducer, useState } from "react";
import Home from "../Home/Home"


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
        text: state.text.trim().split(/\s+/).join(" "),
      };
    default:
      return state;
  }
};
function Screen() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Home text={state.text} dispatch={dispatch} />
    </div>
  );
}

export default Screen;
