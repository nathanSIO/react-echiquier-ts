type DisplayCounterProps = {
    counter : number;
};

export const DisplayCounter = ({ counter}: DisplayCounterProps) => {
    return <div>{counter}</div>
}