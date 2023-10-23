import {Component, PropsWithChildren} from "react";
import Constants from "./Constants";

interface SquareProps extends PropsWithChildren {
    x: number,
    y: number,
    color: string,
    pieceName: string
}

export default class Square extends Component<SquareProps, any> {

    constructor(props: SquareProps) {
        super(props);
    }

    isBlack() {
        return this.props.color === Constants.BLACK
    }

    translateColor(color: string) {
        if (color===Constants.BLACK) {
            return "noire"
        } else {
            return "blanche"
        }
    }
    render() {
        return <td style={{backgroundColor:this.isBlack()?"grey":"white", width:"50px", height:"50px"}} onClick={() => alert(this.props.pieceName+" à la position ["+(this.props.x+1)+","+(this.props.y+1)+"] de couleur "+this.translateColor(this.props.color))}>
            {this.props.children}
        </td>
    }
}
