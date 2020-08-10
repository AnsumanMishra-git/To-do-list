import React, { useState } from "react";

function App() {
  const [inputText, setinputText] = useState("");
  const [item, setitem] = useState([]);

  function update(event) {
    const newText = event.target.value;
    setinputText(newText);
  }

  function add() {
    setitem((prevItems) => {
      return [...prevItems, inputText];
    });
    setinputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={update} value={inputText} />
        <button onClick={add} type="submit">
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((items) => {
            return <li>{items}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
