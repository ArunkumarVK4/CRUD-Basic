import React from "react";
import { useHistory } from "react-router-dom";

function Base({ title, description, children }) {
  const history = useHistory();
  return (
    <div className="main-content">
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <p>{description}</p>
      </main>
      <button onClick={() => history.push("/")}>Dashboard</button>
      <button onClick={() => history.push("/add")}>Add</button>
      
      <div>{children}</div>
    </div>
  );
}

export default Base;
