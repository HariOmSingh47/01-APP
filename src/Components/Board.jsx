import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  // Function to check the winner
  const checkWinner = (s) => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (s[a] && s[a] === s[b] && s[a] === s[c]) {
        return s[a];
      }
    }
    return null;
  };

  const winner = checkWinner(state);
  const isDraw = !winner && state.every((val) => val !== null);

  // When user clicks a square
  const handleClick = (index) => {
    if (winner || state[index]) return;

    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  // Reset button
  const resetGame = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="board-container">
      {winner ? (
        <h2>{winner} won the game 🎉</h2>
      ) : isDraw ? (
        <h2>It's a draw 😅</h2>
      ) : (
        <h3>Next turn: {isXTurn ? "X" : "O"}</h3>
      )}

      <div className="board-row">
        <Square onClick={() => handleClick(0)} value={state[0]} />
        <Square onClick={() => handleClick(1)} value={state[1]} />
        <Square onClick={() => handleClick(2)} value={state[2]} />
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(3)} value={state[3]} />
        <Square onClick={() => handleClick(4)} value={state[4]} />
        <Square onClick={() => handleClick(5)} value={state[5]} />
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(6)} value={state[6]} />
        <Square onClick={() => handleClick(7)} value={state[7]} />
        <Square onClick={() => handleClick(8)} value={state[8]} />
      </div>

      <button onClick={resetGame} className="reset-btn">Reset Game</button>
    </div>
  );
};

export default Board;

