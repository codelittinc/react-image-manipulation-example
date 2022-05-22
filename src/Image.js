import Coordinate from './Coordinate';

function App({ imageUrl, coordinates, setCoordinates }) {
    const onClickImage = (e) => {
        const baseX = e.target.getBoundingClientRect().x;
        const baseY = e.target.getBoundingClientRect().y;

        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        const xCoordinate = e.pageX - baseX - scrollX;
        const yCoordinate = e.pageY - baseY - scrollY;

        const halfPointer = 5;
        const xIdeal = xCoordinate - halfPointer
        const yIdeal = yCoordinate - halfPointer

        setCoordinates([xIdeal, yIdeal])
    }

    return (
        <div id="image-container" onClick={onClickImage}>
            <Coordinate x={coordinates[0]} y={coordinates[1]} />
            <img src={imageUrl} />
        </div>
    );
}

export default App;