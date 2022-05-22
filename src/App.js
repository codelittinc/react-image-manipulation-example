import { useState } from 'react';
import Image from './Image';
import LoadImage from './LoadImage';
import './App.css';

function App() {
  const [imageUrl, setImageUrl] = useState('')
  const [coordinates, setCoordinates] = useState([0, 0])

  return (
    <div className="App">
      <div>
        <div>
          <div id="page">
            <Image imageUrl={imageUrl} coordinates={coordinates} setCoordinates={setCoordinates} />
            <LoadImage setImageUrl={setImageUrl} displayLoad={!imageUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
