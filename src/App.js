import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");

  const handle = () => {
    localStorage.getItem("Name", name);
  };
  const remove = () => {
    localStorage.removeItem("Name");
  };

  useEffect(() => {
    // storing input name
    localStorage.getItem("Name", JSON.stringify(name));
  }, [name]);

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
