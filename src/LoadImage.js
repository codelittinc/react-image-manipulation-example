function LoadImage({ setImageUrl, displayLoad }) {
    const loadImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImageUrl(URL.createObjectURL(img))
        }
    }

    if (!displayLoad) {
        return <div/>
    }

    return (
        <div>
            <h1>Select Image</h1>
            <input type="file" name="myImage" onChange={loadImage} />
        </div>
    );
}

export default LoadImage;