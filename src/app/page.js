"use client";
// Interactions are handled client side not server side
import { useState } from "react";

export default function Home() {
  // let score = 0;
  const [score, setScore] = useState(1);

  // Deconstructing Arrays
  // 1. the variable name doesn't matter
  // 2. the order does matter

  function addToScore() {
    // score++;
    setScore(score + 1);
  }

  return (
    <main>
      <h1>Main Page</h1>
      <div>
        <button onClick={addToScore}>Add 1</button>
        <p>Score: {score}</p>
        {/* Most meta and major frameworks do is create their own DOM that isn't on the page and then renders the actual DOM */}
        {/* Use react hooks too rerender the page for stuff like variables used to hide/show element */}
        {/* useMemo is good for ungodly amounts of math so that the computer doesn't have to reload every time */}
        {/* useReducer is used to create flows for handling lots of data */}
        {/* 2 main hooks we'll use are useState, and useEffect */}
      </div>
    </main>
  );
}
