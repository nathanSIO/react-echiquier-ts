export function Piece () {

    interface ChessPiece {
        type: string; 
        color: string; 
    }
  
  interface ChessSquare {
    piece: ChessPiece | null; // La pièce actuelle sur la case
  }
  
  interface ChessBoardState {
    squares: ChessSquare[][];
  }
  
  const renderChessPieces = (boardState: ChessBoardState) => {
    return boardState.squares.map((row, rowIndex) => (
      <div key={rowIndex} >
        {row.map((square, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`} >
            {square.piece && (
              <div
                // className={`chess-piece ${square.piece.color}`}
                title={`${square.piece.color} ${square.piece.type}`}
              >
                {getPieceSymbol(square.piece.type)}
              </div>
            )}
          </div>
        ))}
      </div>
    ));
    
  };
  
  const getPieceSymbol = (pieceType: string) => {
    switch (pieceType) {
      case 'Pion':
        return '♙'; 
      case 'Tour':
        return '♖'; 
      case 'Cavalier':
        return '♘'; 
      case 'Fou':
        return '♗'; 
      case 'Reine':
        return '♕'; 
      case 'Roi':
        return '♔'; 
      // default:
      //   return '';
    }
  };
  
  // Composant principal
  // const ChessBoard: React.FC = () => {
  // function ChessBoard(){
    const exampleBoardState: ChessBoardState = {
      squares: [
        
        [
          { piece: { type: 'Tour', color: 'white' } },
          { piece: { type: 'Cavalier', color: 'white' } },
          // { piece: { type: 'Fou', color: 'white' } },
          // { piece: { type: 'Reine', color: 'white' } },
          // { piece: { type: 'Roi', color: 'white' } },
          // { piece: { type: 'Fou', color: 'white' } },
          // { piece: { type: 'Cavalier', color: 'white' } },
          // { piece: { type: 'Tour', color: 'white' } },
        ],
        

      ],
    };
  
    return (
      <div className="chess-board">
        {/* Appeler la fonction pour afficher les pièces du jeu d'échecs */}
        {renderChessPieces(exampleBoardState)}
      </div>
    );
  // };
  // return ChessBoard;
}
// export default Piece;