import React, { forwardRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Chessboard } from "react-chessboard";
import { DisplayCounter } from "./Service/Display/diplayCounter";
import { DisplayPosition } from "./Service/Display/displayPosition";
import { toHaveAccessibleErrorMessage } from "@testing-library/jest-dom/matchers";
import { CustomSquareProps } from "react-chessboard/dist/chessboard/types";

function App() {


  function nameColumn(col: any){
    // console.log("colomun : " + col)
    switch (col){
      case 0:
        col = "A";
        break;
      
      case 1 :
        col = "B"
        break;  

      case 2:
        col = "C";
        break;
      
      case 3 :
        col = "D"
        break;

      case 4:
        col = "E";
        break;
      
      case 5 :
        col = "F"
        break;

      case 6 :
        col = "G"
        break;

      case 7 :
        col = "F"
        break;
    }
    // console.log("column after" + col);

    return col ;
    
  }

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
          <div onClick={(event) => console.log(row +""+ nameColumn(col))}
            key={`${row}-${col}`}
            className={`square ${isBlackSquare ? 'black' : 'white'}`}
          >
            <button >{`${row}${nameColumn(col)}`}</button>
            {/* Afficher les pièces d'échecs ici si nécessaire */}
          </div>
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


    return (
      <div className="chessBoard">
        {/* Appeler la fonction pour générer la table d'échecs */}
        {generateChessBoard()}
      </div>
    );
  };

 
 
export default App;

