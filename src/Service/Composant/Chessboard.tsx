import { Dispatch, SetStateAction } from "react";
import { SquarePieceBlack, SquarePieceWhite, getNameWhitePiece, nameColumn } from "./Piece";
import { Square } from "./Square";

type ChessBoardProps = {
    // position: string ,
    position:string, setPosition: Dispatch<SetStateAction<string>>
}

export function chessboard(setPosition: Dispatch<SetStateAction<string>>) {
    let chessBoard =[] 
    const boardSize = 8;
  
    for (let row = 0; row < boardSize; row++) {
      const rowSquares = [];
            for (let col = 0; col < boardSize; col++) {
        
                // Alterner les cases noires et blanches
        const isBlackSquare = (row + col) % 2 === 1;
  
        // Créer une case avec une classe différente pour les cases noires
        rowSquares.push(
          Square(row,col,isBlackSquare,setPosition)

        );
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