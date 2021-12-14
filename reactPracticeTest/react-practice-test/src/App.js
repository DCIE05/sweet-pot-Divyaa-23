/* import React, { useState } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState(0);

  return (
    <div className="App">
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "red",
          transform: `translate(${position}px)`,
        }}
      ></div>
      <button
        onClick={() => {
          position < 400 ? setPosition(position + 50) : setPosition(0);
        }}
      >
        Shift Right
      </button>
    </div>
  );
}

export default App; */

/*  import React, { useState,useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
   const fetchData =()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
      return response.json()
    }).then(data=>{setUsers(data)})
    
  } 
  useEffect(()=>{
   
    fetchData()
  },[])

  return (
    <div className="App">
      <div>{users.map(user=>(<p>{`id:${user.id} name:${user.name} email:${user.email} `}</p>))}</div>
     
    </div>
  );
}

export default App;   */

import React from "react";
import "./App.css";

function App() {
  const authorArr = [
    { authorName: "blaahh", books: ["123", "456", "789"] },
    { authorName: "aaa", books: ["123", "456", "789"] },
    { authorName: "bbb", books: ["123", "456", "789"] },
  ];

  return (
    <div className="App">
      <ul>
        {authorArr.map((author, i) => {
          return (
            <li key={i}>
              {author.authorName}:
               <ul>
                {author.books.map((title, index) => {
                  return <li key={index}>{title}</li>;
                })}
              </ul> 
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

