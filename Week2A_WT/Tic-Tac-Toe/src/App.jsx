// Import the React hook for managing component state.
import { useState } from 'react';

// Define a reusable Square component that shows one cell of the board.
function Square({ value, onSquareClick }) {
  // Render a button for the square; clicking calls the handler passed from the parent.
  return (
    // Apply a CSS class for styling and attach the click handler.
    <button className="square" onClick={onSquareClick}>
      {/* Display the value for this square: 'X', 'O', or null/empty. */}
      {value}
    </button>
  );
}

// Define the Board component responsible for rendering 9 squares and game status.
function Board({ xIsNext, squares, onPlay }) {
  // Handle a click on square i.
  function handleClick(i) {
    // If there's already a winner or the square is filled, ignore the click.
    if (calculateWinner(squares) || squares[i]) {
      return; // Early exit to prevent further moves in these cases.
    }
    // Create a shallow copy of the squares array to avoid mutating state directly.
    const nextSquares = squares.slice();
    // Place 'X' if it's X's turn, otherwise place 'O'.
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    // Notify the parent (Game) with the next board state so it can update history.
    onPlay(nextSquares);
  }

  // Determine if there's a winner for the current board.
  const winner = calculateWinner(squares);
  // Prepare a status message to show either the winner or whose turn is next.
  let status;
  if (winner) {
    status = 'Winner: ' + winner; // Show the winning player.
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O'); // Indicate next turn.
  }

  // Render the board UI and status text.
  return (
    <>
      {/* Display the status message at the top. */}
      <div className="status">{status}</div>
      {/* First row of squares. */}
      <div className="board-row">
        {/* Each Square gets its current value and a click handler bound to its index. */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      {/* Second row of squares. */}
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      {/* Third row of squares. */}
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// The top-level Game component manages move history and time travel.
export default function Game() {
  // 'history' stores snapshots of the board after each move; start with an empty board.
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // 'currentMove' is the index into 'history' for the board to display.
  const [currentMove, setCurrentMove] = useState(0);
  // Determine whose turn it is: X goes on even moves, O on odd moves.
  const xIsNext = currentMove % 2 === 0;
  // Get the squares for the current position.
  const currentSquares = history[currentMove];

  // Handle a new move from the Board.
  function handlePlay(nextSquares) {
    // Discard any "future" history if we've time-traveled, then append the new position.
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // Save the updated history array.
    setHistory(nextHistory);
    // Advance currentMove pointer to the latest snapshot.
    setCurrentMove(nextHistory.length - 1);
  }

  // Jump to a specific historical move (time travel).
  function jumpTo(nextMove) {
    setCurrentMove(nextMove); // Update which snapshot is currently shown.
  }

  // Build a list of buttons for each move in the history to enable time travel.
  const moves = history.map((squares, move) => {
    // Human-friendly description for each move.
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    // Render a list item with a button that jumps to that move when clicked.
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  // Render the game layout: the board and the move list.
  return (
    <div className="game">
      {/* Left: the current game board view. */}
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      {/* Right: the move history and time-travel controls. */}
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// Helper function that checks all winning lines and returns 'X' or 'O' if found.
function calculateWinner(squares) {
  // All 8 possible lines that constitute a win in tic-tac-toe.
  const lines = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6], // Diagonal top-right to bottom-left
  ];
  // Iterate over each possible winning line.
  for (let i = 0; i < lines.length; i++) {
    // Destructure indices for the three squares in this line.
    const [a, b, c] = lines[i];
    // If the first is non-null and all three match, we have a winner.
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return 'X' or 'O'.
    }
  }
  // If no winning line found, return null (no winner yet).
  return null;
}

// export default Game; // (Already exported above.)
