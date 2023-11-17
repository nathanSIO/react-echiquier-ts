import { useState } from "react";
import { SquarePieceBlack, SquarePieceWhite, getNameWhitePiece, nameColumn } from "./Piece";
import { DisplayPosition } from "../Display/displayPosition";
import { chessboard } from "./Chessboard";

export function Page(){

    const [position, setPosition] = useState<string>("");
    const [chessBoard, setChessBoardTest] =  useState<JSX.Element[]>(chessboard(setPosition))
    
      return (
        <div className="chessBoard" align-text="center">
          {chessBoard}
          <div align-text="center">
            <DisplayPosition position={position} />
          </div>
        </div>
      );
}