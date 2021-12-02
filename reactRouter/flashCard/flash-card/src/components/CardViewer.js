import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "../App.css";

function CardViewer(props) {
  const [count, setCounter] = useState(0);

  const [state, setState] = useState(true);
  const nextCard = () => {
    if (count === props.result.length - 1 || !state) {
      setCounter(count);
    } else {
      setCounter(count + 1);
    }
  };

  const prevCard = () => {
    if (count === 0 || !state) {
      setCounter(count);
    } else {
      setCounter(count - 1);
    }
  };

  const handleClick = () => {
    setState(!state);
  };

  return (
    <div className="Viewer">
      <h1>Card Viewer</h1>
      <div
        style={{
          border: "2px solid red",
          width: "700px",
          height: "350px",
          margin: "20px",
        }}
        onClick={handleClick}
      >
        <h1>{state ? props.result[count][0] : props.result[count][1]}</h1>
      </div>
      <button onClick={prevCard}>Prev Card</button>
      <button onClick={nextCard}>Next Card</button>
      <button>Card Editor</button>
    </div>
  );
}

export default CardViewer;
