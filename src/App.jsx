import React, { useState } from "react";
import "./App.css";
import Roses from "./components/Roses";
import Sunflowers from "./components/Sunflowers";
import Lilies from "./components/Lilies";
import Tulips from "./components/Tulips";

const App = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [flowerType, setFlowerType] = useState(null);

  const showFullscreenImage = (imageUrl, type) => {
    setFullscreenImage(imageUrl);
    setFlowerType(type);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="App">
      <h1 className="title">My Flower Gallery</h1>
      <p className="para">Choose a flower you want to display:</p>
      <br></br>
      <div className="flower-gallery">
        <Roses showFullscreenImage={showFullscreenImage} />
        <Sunflowers showFullscreenImage={showFullscreenImage} />
        <Lilies showFullscreenImage={showFullscreenImage} />
        <Tulips showFullscreenImage={showFullscreenImage} />
      </div>
      {fullscreenImage && (
        <div className="image-fullscreen" onClick={closeFullscreenImage}>
          {flowerType === "roses" && <img src={fullscreenImage} alt="Rose" />}
          {flowerType === "sunflowers" && (
            <img src={fullscreenImage} alt="Sunflower" />
          )}
          {flowerType === "lilies" && <img src={fullscreenImage} alt="Lily" />}
          {flowerType === "tulips" && <img src={fullscreenImage} alt="Tulip" />}
        </div>
      )}
    </div>
  );
};

export default App;
