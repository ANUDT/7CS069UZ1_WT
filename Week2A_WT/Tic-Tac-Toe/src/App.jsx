
import React, { useState } from 'react';

function Square({ value }) {
  const [squareValue, setSquareValue] = useState(value || null);

  function handleClick() {
    setSquareValue('X');
    // Handle square click event        
    console.log(`Square ${squareValue} clicked!`);
    console.log('Click handler is working!');
    alert(`Square ${squareValue} was clicked!`); // Visual confirmation
  }

  return (
    <button className="square" onClick={handleClick}>
      {squareValue}
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

