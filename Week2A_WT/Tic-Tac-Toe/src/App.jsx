
import React, { useState } from 'react';

function Square({ value }) {
  const [squareValue, setSquareValue] = useState(Array(9).fill(null));

  function handleClick() {
    const newSquareValue = [...squareValue];
    newSquareValue[value] = 'X';
    setSquareValue(newSquareValue);
    // Handle square click event
    console.log(`Square ${value} clicked!`);
    console.log('Click handler is working!');
    alert(`Square ${value} was clicked!`); // Visual confirmation
  }

  return (
    <button className="square" onClick={handleClick}>
      {squareValue[value]}
    </button>
  );
}

export function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export default function App() {
  return <Board />;
}

