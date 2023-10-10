import "./App.css";
import { Piece } from "./Service/Composant/Piece";

function App() {

function verifSquarePiece(keySquare: any){
  
  switch (keySquare) {
    case "0A" :
      console.log("je suis la ");
      return( "♖");
    case "0B" :
      return (<div style={{
        alignItems :"center",
        height : "50px",
        width : "50px",
        textSizeAdjust : "",
      }}>♘</div>)
    // a compléter et chercher comment ajuster la taille du caractère 
    // Fonction Piece() peut être inutile si cela fonctionne bien comme ça 
  }
}

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
      Piece();
  
      for (let col = 0; col < boardSize; col++) {
        
        

        // Alterner les cases noires et blanches
        const isBlackSquare = (row + col) % 2 === 1;
  
        // Créer une case avec une classe différente pour les cases noires
        rowSquares.push(
          <div onClick={() => console.log(row +""+ nameColumn(col))}
            key={`${row}${col}`}
            className={`square ${isBlackSquare ? 'black' : 'white'}`}
          >
            <button >{`${row}${nameColumn(col)}`}</button>

            {verifSquarePiece(row + "" + nameColumn(col))}
            {/* <div>{Piece()}</div>:  */}

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

