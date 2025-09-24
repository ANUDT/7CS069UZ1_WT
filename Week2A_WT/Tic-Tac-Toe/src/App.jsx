
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

function Board() {
  const [squares] = useState(['O', null, 'X', 'X', 'X', 'O', 'O', null, null]);
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}

export default function App() {
  return <Board />;
}

