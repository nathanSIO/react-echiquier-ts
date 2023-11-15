import { useState } from "react";
import "./App.css";
import { DisplayPosition } from "./Service/Display/displayPosition";
import { SquarePieceWhite, SquarePieceBlack,nameColumn,getNameWhitePiece  } from "./Service/Composant/Piece";
import { Chessboard } from "react-chessboard";


function App() {

  return (
    <div className="principal">
      <Chessboard/>
    </div>
  )
  }; 
export default App;

