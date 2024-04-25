import React, { useState } from "react";
import "./Flower.css";

const Sunflowers = ({ showFullscreenImage }) => {
  const [showImages, setShowImages] = useState(false);
  return (
    <div className="flower-container">
      <button className="btn" onClick={() => setShowImages(!showImages)}>
        Sunflowers
      </button>
      {showImages && (
        <div className="image-collection">
          <img
            src="https://source.unsplash.com/featured/?sunflower"
            alt="Sunflower"
            onClick={() =>
              showFullscreenImage(
                "https://source.unsplash.com/featured/?sunflower"
              )
            }
          />
          <img
            src="https://source.unsplash.com/featured/?sunflower"
            alt="Sunflower"
            onClick={() =>
              showFullscreenImage(
                "https://source.unsplash.com/featured/?sunflower"
              )
            }
          />
          <img
            src="https://source.unsplash.com/featured/?sunflower"
            alt="Sunflower"
            onClick={() =>
              showFullscreenImage(
                "https://source.unsplash.com/featured/?sunflower"
              )
            }
          />
          <img
            src="https://source.unsplash.com/featured/?sunflower"
            alt="Sunflower"
            onClick={() =>
              showFullscreenImage(
                "https://source.unsplash.com/featured/?sunflower"
              )
            }
          />
        </div>
      )}
    </div>
  );
};

export default Sunflowers;
