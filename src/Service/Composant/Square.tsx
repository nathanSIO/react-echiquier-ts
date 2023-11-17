import { Dispatch, SetStateAction } from "react";
import { SquarePieceBlack, SquarePieceWhite, getNameWhitePiece, nameColumn } from "./Piece";

type SquareProps = {
    setPosition: Dispatch<SetStateAction<string>>
}

export function Square(row: number, col: number , isBlackSquare: boolean, setPosition: Dispatch<SetStateAction<string>>){
    return(
        <div onClick={() => setPosition(
            getNameWhitePiece(row +""+ nameColumn(col)) 
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
    )
}