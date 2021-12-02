import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import CardEditor from "./components/CardEditor";
import CardViewer from "./components/CardViewer";

function App() {
  let tempArr = [];
  const getInitialList = () => {
    const initialValue = localStorage.getItem("frontBack")
      ? JSON.parse(localStorage.getItem("frontBack"))
      : [];
    return initialValue;
  };

  const [frontValue, setFrontValue] = useState("");

  const [backValue, setBackValue] = useState("");

  const [result, setResult] = useState(getInitialList);
  const addCard = () => {
    setFrontValue("");
    setBackValue("");

    tempArr = [frontValue, backValue];
    setResult([...result, tempArr]);
  };
  useEffect(() => {
    if (result.length > 0) {
      localStorage.setItem("frontBack", JSON.stringify(result));
    }
  }, [result]);

  return (
    <div className="App">
      <h1>Card Editor</h1>

      {/*  <Link to="/CardEditor">Card Editor</Link> */}

      <CardEditor setResult={setResult} result={result} />

      <input
        onChange={(e) => setFrontValue(e.target.value)}
        value={frontValue}
      />
      <input onChange={(e) => setBackValue(e.target.value)} value={backValue} />
      <button onClick={addCard}>Add Card</button>
      <CardViewer result={result} />
    </div>
  );
}

export default App;
