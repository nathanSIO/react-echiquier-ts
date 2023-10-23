import {Component} from "react";
import Square from "./Square";
import Constants from "./Constants";
import Piece from "./Piece";


export default class Chessboard extends Component<any, any> {

    static PIECE_ORDER = ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
    static PIECE_NAME_ORDER = ['tour', 'cavalier', 'fou', 'reine', 'roi', 'fou', 'cavalier', 'tour']

    getLine(lineNumber: number) {
        const squares = []
        let startColor = Constants.WHITE
        if (lineNumber%2==1) {
            startColor = Constants.BLACK
        }

        // iteration sur les colonnes
        for (let i = 0; i < 8; i++) {

            if (lineNumber==0 || lineNumber==7) { // PIECES
                squares.push(<Square key={"s-"+i+"-"+lineNumber} x={i} y={lineNumber} color={startColor} pieceName={Chessboard.PIECE_NAME_ORDER[i]} >
                    <Piece symbol={Chessboard.PIECE_ORDER[i]} />
                </Square>)
            } else if (lineNumber==1 || lineNumber==6) { // PIONS
                squares.push(<Square key={"s-"+i+"-"+lineNumber} x={i} y={lineNumber} color={startColor} pieceName={"pion"}>
                    <Piece symbol={'♙'} />
                </Square>)
            } else { // VIDES
                squares.push(<Square key={"s-"+i+"-"+lineNumber} x={i} y={lineNumber} color={startColor} pieceName={"vide"}>

                </Square>)
            }

            // change de couleur à colonne suivante
            startColor == Constants.WHITE ? startColor = Constants.BLACK : startColor = Constants.WHITE
        }

        return <tr key={"line-"+lineNumber}>
            {squares}
        </tr>
    }

    render() {
        return <table style={{margin:"auto", marginTop: "50vh", transform: "translateY(-50%)"}}>
                <tbody>
                    {this.getLine(0)}
                    {this.getLine(1)}
                    {this.getLine(2)}
                    {this.getLine(3)}
                    {this.getLine(4)}
                    {this.getLine(5)}
                    {this.getLine(6)}
                    {this.getLine(7)}
                </tbody>
            </table>
    }
}
