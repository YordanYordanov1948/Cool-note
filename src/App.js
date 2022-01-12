import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handle = () => {
    localStorage.setItem("Name", name);
  };

  const setSumbit = () => {
    localStorage.getItem("Name");
  };

  const remove = () => {
    localStorage.removeItem("Name");
  };

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea
              className="textarea is-large"
              placeholder="Notes..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              onSubmit={setSumbit}
            />
          </div>
        </div>
        <button
          className="button is-large is-primary is-active"
          onClick={handle}
        >
          Save
        </button>
        <button className="button is-large" onClick={remove}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
