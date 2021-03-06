import React, { useEffect, useState, useRef } from 'react';
import Image from './Image';
import LoadImage from './LoadImage';
import Items from './Items';
import './App.css';

import {
  exportComponentAsPNG
} from "react-component-export-image";

const baseItems = [
  {
    desc: 'broken faucet',
    id: 1
  },
  {
    desc: 'carpet stain',
    id: 2
  },
  {
    desc: 'nail hole 1',
    id: 3
  },
  {
    desc: 'nail hole 2',
    id: 4
  },
  {
    desc: 'floor stain',
    id: 5
  }
];

function App() {
  const [imageUrl, setImageUrl] = useState('')
  const [items, setItems] = useState([]);
  const [activeItem, setActiveItem] = useState({})
  const ref = useRef(null)

  useEffect(() => {
    setItems(baseItems)
  }, [])

  const addCoordinateToItem = (c) => {
    if (!activeItem) {
      return;
    }
    const itemIndex = items.findIndex((i) => i.id == activeItem.id);
    const item = items.find((i) => i.id == activeItem.id);
    item.x = c[0]
    item.y = c[1]
    const newItems = items
    newItems[itemIndex] = item;
    setItems(newItems)
    setActiveItem(null)
  };

  const removeCoordinateFromItem = (c) => {
    const itemIndex = items.findIndex((i) => i.id == c.id);
    const item = items.find((i) => i.id == c.id);
    item.x = undefined
    item.y = undefined
    const newItems = items
    newItems[itemIndex] = item;
    setItems(newItems)
    setActiveItem(null)
  }


  const coordinateItems = items.filter((i) => i.x && i.y);

  return (
    <div className="App">
      <div>
        <div>
          <div id="page">
            <Items itemsList={items} setActiveItem={setActiveItem} />
            <Image ref={ref} imageUrl={imageUrl} items={coordinateItems} setCoordinates={addCoordinateToItem} removeCoordinate={removeCoordinateFromItem} />
            <LoadImage setImageUrl={setImageUrl} displayLoad={!imageUrl} />
            {imageUrl && <button className="export" onClick={() => { exportComponentAsPNG(ref)}}>
              Export As PNG
            </button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
