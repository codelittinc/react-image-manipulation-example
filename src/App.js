import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [imageUrl, setImageUrl] = useState('')
  const [coordinates, setCoordinates] = useState([0, 0])
  const loadImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImageUrl(URL.createObjectURL(img))
    }
  }

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

  const loadImageMkp = imageUrl ? <div /> :
    (<div><h1>Select Image</h1>
      <input type="file" name="myImage" onChange={loadImage} /></div>);

  return (
    <div className="App">
      <div>
        <div>
          <div id="page">
            <div id="image-container" onClick={onClickImage}>
              <div id="pointer" style={{ left: `${coordinates[0]}px`, top: `${coordinates[1]}px` }} />
              <img src={imageUrl} />
            </div>

            {loadImageMkp}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
