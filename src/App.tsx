import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Chessboard } from 'react-chessboard';
import { DisplayCounter } from './Service/Display/diplayCounter';

function App() {
  const [counter, setCounter] = useState <number> (0);
  const [position, setPosition] = useState <string>("");

  return (
    <div className="ChessBoard" onClick={event => console.log(event)}>
      <Chessboard  onPieceClick={event => setPosition} onSquareClick={event => console.log(event)} id="chessboard" />
    
      {/* <button onClick={() => setCounter((prevState) => prevState +1)}>Plus 1 </button><br></br>
      <button onClick={() => setCounter((prevState) => prevState -1)}>Moins 1 </button>
      <DisplayCounter counter={counter} /> */}

      <input value={position}></input>
    </div>
  );


  
}

export default App;
