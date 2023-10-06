type DisplayPositionProps = {
    position : string;
}

export const DisplayPosition = ({position}: DisplayPositionProps) => {
    return <input value={position}></input>
}