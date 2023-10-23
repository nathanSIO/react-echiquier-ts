import {Component} from "react";

interface PieceProps {
    symbol: string
}

export default class Piece extends Component<PieceProps, any> {

    constructor(props: PieceProps) {
        super(props);
    }

    render() {
        return <div style={{textAlign:"center"}}>
            {this.props.symbol}
        </div>
    }
}
