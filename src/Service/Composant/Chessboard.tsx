import { useState } from "react";
import { SquarePieceBlack, SquarePieceWhite, getNameWhitePiece, nameColumn } from "./Piece";
import { DisplayPosition } from "../Display/displayPosition";

function chessBoard(){
    const [position, setPosition] = useState<string>("");
    let nomPiece: string;
  
    function generateChessBoard() {
      const chessBoard = [];
      const boardSize = 8;
    
      for (let row = 0; row < boardSize; row++) {
        const rowSquares = [];
              for (let col = 0; col < boardSize; col++) {
          
                  // Alterner les cases noires et blanches
          const isBlackSquare = (row + col) % 2 === 1;
    
          // Créer une case avec une classe différente pour les cases noires
          rowSquares.push(
            <div onClick={() => setPosition(
              getNameWhitePiece(row +""+ nameColumn(col)) //afficher dans la console les données d'une pièce 
              + " sur la case : " + row +""
              + nameColumn(col)
              )}
              key={`${row}${col}`}
              className={`square ${isBlackSquare ? 'black' : 'white'}`}
            >
              <button >{`${row}${nameColumn(col)}`}</button>
              {SquarePieceWhite(row + "" + nameColumn(col))}
              {SquarePieceBlack(row + "" + nameColumn(col))}
            </div>
          );
          // console.log("je suis la " + row + "" + nameColumn(col));
        }
    
        // Ajouter la ligne au tableau d'échecs
        chessBoard.push(
          <div key={row} className="chess-row">
            {rowSquares}
          </div>
        );
      }
        return chessBoard;
    };
      return (
        <div className="chessBoard" align-text="center">
          {generateChessBoard()}
          <div align-text="center">
            <DisplayPosition position={position} />
          </div>
        </div>
      );
}