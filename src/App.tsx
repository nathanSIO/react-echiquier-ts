import { useState } from "react";
import "./App.css";
import { DisplayPosition } from "./Service/Display/displayPosition";
import { SquarePieceWhite, SquarePieceBlack,nameColumn,getNameWhitePiece  } from "./Service/Composant/Piece";


function App() {

  const [position, setPosition] = useState<string>("");
  let nomPiece: string;

//   function SquarePieceWhite(keySquare: any){
//   switch (keySquare) {

//     case "0A" :
//       return(<div style={{
//           fontSize : '75px',
//           textAlign : "center",
//           lineHeight : "0.8"
//         }}>♖</div>);

//     case "0B" :
// // console.log("je suis la " + nomPiece)
//       return (<div style={{
//         fontSize : '75px',
//           textAlign : "center",
//           lineHeight : "0.8"
//         }} >♘</div>);
      
//       case "0C" :
//         return (<div style={{
//           fontSize : '75px',
//           textAlign : "center",
//           lineHeight : "0.8"
//         }}>♗</div>);

//       case "0D" : 
//         return (<div style={{
//           fontSize : '75px',
//           textAlign : "center",
//           lineHeight : "0.8"
//         }}>♕</div>);

//       case "0E" : 
//         return (<div style={{
//           fontSize : '75px',
//           textAlign : "center",
//           lineHeight : "0.8"
//         }}>♔</div>);

//       case "0F" :
//         return (<div style={{
//           fontSize : '75px',
//           textAlign : "center",
//           lineHeight : "0.8"
//         }}>♗</div>);

//       case "0G" :
//         return (<div style={{
//           fontSize : '75px',
//           textAlign : "center",
//           lineHeight : "0.8"
//         }}>♘</div>);
      
//       case "0H" :
//         return (<div style={{
//           fontSize : '75px',
//           textAlign : "center",
//           lineHeight : "0.8"
//         }}>♖</div>)

//       case "1A" :
//       case "1B" :
//       case "1C" :
//       case "1D" :
//       case "1E" :
//       case "1F" :
//       case "1G" :
//       case "1H" :
//         return(<div style={{
//           fontSize : '75px',
//           textAlign : "center",
//           lineHeight : "0.8"
//         }}>♙</div>)
//     }
//     return nomPiece;
//   }

//   function SquarePieceBlack(keySquare: any){
//     switch (keySquare) {
//       case "7A" :
//         return(<div style={{
//           fontSize : '75px',
//           textAlign : "center",
//           lineHeight : "0.8"
//         }}>♜</div>);

//       case "7B" :
//         return (<div style={{
//           fontSize : '75px',
//           textAlign : "center",
//           lineHeight : "0.8"
//         }} >♞</div>);
      
//       case "7C" :
//         return (<div style={{
//           fontSize : '75px',
//           textAlign : "center",
//           lineHeight : "0.8"
//         }}>♝</div>);

//       case "7D" : 
//         return (<div style={{
//           fontSize : '75px',
//           textAlign : "center",
//           lineHeight : "0.8"
//         }}>♛</div>);

//       case "7E" : 
//         return (<div style={{
//           fontSize : '75px',
//           textAlign : "center",
//           lineHeight : "0.8"
//         }}>♚</div>);

//       case "7F" :
//         return (<div style={{
//           fontSize : '75px',
//           textAlign : "center",
//           lineHeight : "0.8"
//         }}>♝</div>);

//       case "7G" :
//         return (<div style={{
//           fontSize : '75px',
//           textAlign : "center",
//           lineHeight : "0.8"
//         }}>♞</div>);
      
//       case "7H" :
//         return (<div style={{
//           fontSize : '75px',
//           textAlign : "center",
//           lineHeight : "0.8"
//         }}>♜</div>)

//       case "6A" :
//       case "6B" :
//       case "6C" :
//       case "6D" :
//       case "6E" :
//       case "6F" :
//       case "6G" :
//       case "6H" :
//         return(<div style={{
//           fontSize : '75px',
//           textAlign : "center",
//           lineHeight : "0.8"
//         }}>♟</div>)
//   }
// }

//   function nameColumn(col: any){
//         switch (col){
//       case 0:
//         col = "A";
//         break;
      
//       case 1 :
//         col = "B"
//         break;  

//       case 2:
//         col = "C";
//         break;
      
//       case 3 :
//         col = "D"
//         break;

//       case 4:
//         col = "E";
//         break;
      
//       case 5 :
//         col = "F"
//         break;

//       case 6 :
//         col = "G"
//         break;

//       case 7 :
//         col = "H"
//         break;
//     }
//     // console.log("column after" + col);

//     return col ;      

//   } 

//   function getNameWhitePiece(keySquare: any){
//     switch (keySquare) {

//       case "0A" :
//          nomPiece = "TOUR BLANCHE";
//          break;

//       case "0B" :
//         nomPiece = "CAVALIER BLANC";
//         break;
      
//       case "0C" :
//         nomPiece = "FOU BLANC";
//         break;

//       case "0D" : 
//         nomPiece = "REINE BLANCHE";
//         break;

//       case "0E" : 
//         nomPiece = "ROI BLANC";
//         break;

//       case "0F" :
//         nomPiece = "FOU BLANC";
//         break;

//       case "0G" :
//         nomPiece = "CAVALIER BLANC";
//         break;
      
//       case "0H" :
//         nomPiece = "TOUR BLANCHE";
//         break;

//       case "1A" :
//       case "1B" :
//       case "1C" :
//       case "1D" :
//       case "1E" :
//       case "1F" :
//       case "1G" :
//       case "1H" :
//         nomPiece = "Pion Blanc"
//         break;
//     }
//     getNameBlackPiece(keySquare)
//     return nomPiece;
//   }

//   function getNameBlackPiece(keySquare: any){
//     console.log("je suis la ")
//     switch (keySquare) {
//       case "7A" :
//          nomPiece = "TOUR NOIRE";
//          break;

//       case "7B" :
//         nomPiece = "CAVALIER NOIR";
//         break;
      
//       case "7C" :
//         nomPiece = "FOU NOIR";
//         break;

//       case "7D" : 
//         nomPiece = "REINE NOIRE";
//         break;

//       case "7E" : 
//         nomPiece = "ROI NOIR";
//         break;

//       case "7F" :
//         nomPiece = "FOU NOIR";
//         break;

//       case "7G" :
//         nomPiece = "CAVALIER NOIR";
//         break;
      
//       case "7H" :
//         nomPiece = "TOUR NOIRE";
//         break;

//       case "6A" :
//       case "6B" :
//       case "6C" :
//       case "6D" :
//       case "6E" :
//       case "6F" :
//       case "6G" :
//       case "6H" :
//         nomPiece = "Pion NOIR"
//         break;
//     }

//     return nomPiece;
//   }

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
  }; 
export default App;

