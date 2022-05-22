function Coordinate({ x, y }) {
    return (
        <div id="pointer" style={{ left: `${x}px`, top: `${y}px` }} />
    );
}

export default Coordinate;