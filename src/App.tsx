import React, { forwardRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Chessboard } from "react-chessboard";
import { DisplayCounter } from "./Service/Display/diplayCounter";
import { DisplayPosition } from "./Service/Display/displayPosition";
import { toHaveAccessibleErrorMessage } from "@testing-library/jest-dom/matchers";
import { CustomSquareProps } from "react-chessboard/dist/chessboard/types";

function App() {
  const [counter, setCounter] = useState<number>(0);
  const [position, setPosition] = useState<string>("");
  // const square ;

  function getSquare(squareParam: any){
    if(!squareParam){
      console.log("null");
    }
    else {
      console.log(squareParam);
    }
    // CustomSquareRenderer
    
    return ( 
      <div > Bonjour</div>
    );
    
  }

  const CustomSquareRenderer = forwardRef<HTMLDivElement, CustomSquareProps>((props, ref) => {
    const { children, square, squareColor, style } = props;
      
    return (
      <div  ref={ref} style={{ ...style, position: "relative" }}>
        {children}
        <button
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 16,
            width: 16,
            borderTopLeftRadius: 6,
            backgroundColor: squareColor === "black" ? "#064e3b" : "#312e81",
            color: "#fff",
            fontSize: 14,
          }}
        >
          {square}
        </button>
      </div>
          );
      });

  function setNomPiece(piece: string){
    console.log(piece);
    switch (piece) {
      case "wP":
        piece = "Pion blanc";
        break;

      case "bP":
        piece = "Pion noir";
        break;

      case "wR":
        piece = "Tour blanche";
        break;
      
      case "bR":
        piece = "Tour noire";
        break;

      case "wN":
        piece = "Cavalier blanc";
        break;

      case "bN":
        piece = "Cavalier noir";
        break;

      case "wB":
        piece = "Fou blanc";
        break;

      case "bB":
        piece = "Fou noir";
        break;

      case "wQ":
        piece = "Reine Blanche";
        break;

      case "bQ":
        piece = "Reine noire";
        break;

      case "wK":
        piece = "Roi blanc";
        break;

      case "bK":
        piece = "Roi noir ";
        break;
    }
    return piece
  }

  return (
    <div className="ChessBoard" onClick={(event) => console.log(event)}>
      <Chessboard customArrowColor="rgb(255,170,0)"
        // id="customSquare"
        customSquare={CustomSquareRenderer}
        showBoardNotation={false}
        onPieceClick={  (event) => setPosition(setNomPiece(event))}
        onSquareClick={(event) => setPosition((prevState) => prevState + " sur la case " + event)}
        onSquareRightClick={(event) => getSquare(event)}
        id="chessboard"
      ></Chessboard>

      {/* <button onClick={() => setCounter((prevState) => prevState +1)}>Plus 1 </button><br></br>
      <button onClick={() => setCounter((prevState) => prevState -1)}>Moins 1 </button>
      <DisplayCounter counter={counter} /> */}

      <DisplayPosition position={position} />
    </div>
  );
}

export default App;

// ((event: string) => setSquare(event)) && 