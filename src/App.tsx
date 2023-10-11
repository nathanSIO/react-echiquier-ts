import "./App.css";
import { Piece } from "./Service/Composant/Piece";

function App() {

  let nomPiece: string;
  
  function SquarePieceWhite(keySquare: any){
    switch (keySquare) {

      case "0A" :
        return(<div style={{
          fontSize : '75px',
          textAlign : "center",
          lineHeight : "0.8"
        }}>♖</div>);

      case "0B" :
        console.log("je suis la " + nomPiece)
        return (<div style={{
          fontSize : '75px',
          textAlign : "center",
          lineHeight : "0.8"
        }} >♘</div>);
      
      case "0C" :
        return (<div style={{
          fontSize : '75px',
          textAlign : "center",
          lineHeight : "0.8"
        }}>♗</div>);

      case "0D" : 
        return (<div style={{
          fontSize : '75px',
          textAlign : "center",
          lineHeight : "0.8"
        }}>♕</div>);

      case "0E" : 
        return (<div style={{
          fontSize : '75px',
          textAlign : "center",
          lineHeight : "0.8"
        }}>♔</div>);

      case "0F" :
        return (<div style={{
          fontSize : '75px',
          textAlign : "center",
          lineHeight : "0.8"
        }}>♗</div>);

      case "0G" :
        return (<div style={{
          fontSize : '75px',
          textAlign : "center",
          lineHeight : "0.8"
        }}>♘</div>);
      
      case "0H" :
        return (<div style={{
          fontSize : '75px',
          textAlign : "center",
          lineHeight : "0.8"
        }}>♖</div>)

      case "1A" :
      case "1B" :
      case "1C" :
      case "1D" :
      case "1E" :
      case "1F" :
      case "1G" :
      case "1H" :
        return(<div style={{
          fontSize : '75px',
          textAlign : "center",
          lineHeight : "0.8"
        }}>♙</div>)
    }
    return nomPiece;
  }

  function SquarePieceBlack(keySquare: any){
    switch (keySquare) {
      case "7A" :
        console.log("je suis la ");
        return(<div style={{
          fontSize : '75px',
          textAlign : "center",
          lineHeight : "0.8"
        }}>♜</div>);

      case "7B" :
        return (<div style={{
          fontSize : '75px',
          textAlign : "center",
          lineHeight : "0.8"
        }} >♞</div>);
      
      case "7C" :
        return (<div style={{
          fontSize : '75px',
          textAlign : "center",
          lineHeight : "0.8"
        }}>♝</div>);

      case "7D" : 
        return (<div style={{
          fontSize : '75px',
          textAlign : "center",
          lineHeight : "0.8"
        }}>♛</div>);

      case "7E" : 
        return (<div style={{
          fontSize : '75px',
          textAlign : "center",
          lineHeight : "0.8"
        }}>♚</div>);

      case "7F" :
        return (<div style={{
          fontSize : '75px',
          textAlign : "center",
          lineHeight : "0.8"
        }}>♝</div>);

      case "7G" :
        return (<div style={{
          fontSize : '75px',
          textAlign : "center",
          lineHeight : "0.8"
        }}>♞</div>);
      
      case "7H" :
        return (<div style={{
          fontSize : '75px',
          textAlign : "center",
          lineHeight : "0.8"
        }}>♜</div>)

      case "6A" :
      case "6B" :
      case "6C" :
      case "6D" :
      case "6E" :
      case "6F" :
      case "6G" :
      case "6H" :
        return(<div style={{
          fontSize : '75px',
          textAlign : "center",
          lineHeight : "0.8"
        }}>♟</div>)
    }
  }

  function nameColumn(col: any){
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
        col = "H"
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
          <div onClick={() => console.log(nomPiece + " sur la case : " + row +""+ nameColumn(col))}
            key={`${row}${col}`}
            className={`square ${isBlackSquare ? 'black' : 'white'}`}
          >
            <button >{`${row}${nameColumn(col)}`}</button>
            {SquarePieceWhite(row + "" + nameColumn(col))}
            {SquarePieceBlack(row + "" + nameColumn(col))}
          </div>
        );
        console.log("je suis la " + row + "" + nameColumn(col));
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
        {generateChessBoard()}
        {/* {Piece()}   */}
      </div>
    );
}; 
export default App;

