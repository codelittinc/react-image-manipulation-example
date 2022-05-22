function Coordinate({ item, onClick }) {
    if (!item.x || !item.y) {
        return <div />
    }

    console.log(item)
    return (
        <div className="pointer" style={{ left: `${item.x}px`, top: `${item.y}px` }} onClick={(e) => {
            e.preventDefault()
            onClick(item)
        }}>
            <span>{item.id}</span>
        </div>
    );
}

export default Coordinate;