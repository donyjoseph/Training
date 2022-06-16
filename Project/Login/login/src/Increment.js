import React from 'react';
import { useState } from "react";
import ReactDOM from "react-dom";
function Increment() {
  const [count, setcount] = useState(0);
  const incrementcount=()=>{
      setcount(count+1);
  };
  return(
      <div className="app">
      <button onClick={incrementcount}>click</button>
      {count}
    </div>
);
}
export default Increment;
