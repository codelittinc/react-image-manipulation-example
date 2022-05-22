import React from 'react';
import Coordinate from './Coordinate';

const Image = React.forwardRef(({ imageUrl, setCoordinates, items, removeCoordinate }, ref) => {
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

    const coordinates = items.map((i) => (
        <Coordinate key={`${i.id}-co`} item={i} onClick={removeCoordinate} />
    ))

    console.log('ref', ref)   

    return (
        <div id="image-container" onClick={onClickImage} ref={ref}>
            {coordinates}
            <img src={imageUrl} />
        </div>
    );
})

export default Image;