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

            squares.push(this.getSquare(i, lineNumber, startColor))

            // change de couleur à colonne suivante
            startColor == Constants.WHITE ? startColor = Constants.BLACK : startColor = Constants.WHITE
        }

        return <tr key={"line-"+lineNumber}>
            {squares}
        </tr>
    }

    getSquare(x: number, y: number, startColor: string) {
        switch (y) {
            case 0 : // PIECES
            case 7 : {
                return <Square key={"s-"+x+"-"+y} x={x} y={y} color={startColor} pieceName={Chessboard.PIECE_NAME_ORDER[x]} >
                    <Piece symbol={Chessboard.PIECE_ORDER[x]} />
                </Square>
            }
            case 1 : // PIONS
            case 6 : {
                return <Square key={"s-"+x+"-"+y} x={x} y={y} color={startColor} pieceName={"pion"}>
                    <Piece symbol={'♙'} />
                </Square>
            }
            default : { // VIDES
                return <Square key={"s-"+x+"-"+y} x={x} y={y} color={startColor} pieceName={"vide"}>

                </Square>
            }
        }
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
