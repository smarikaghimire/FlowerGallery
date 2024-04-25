import React, { useState } from "react";
import "./Flower.css";

const Roses = ({ showFullscreenImage }) => {
  const [showImages, setShowImages] = useState(false);

  return (
    <div className="flower-container">
      <button className="btn" onClick={() => setShowImages(!showImages)}>
        Roses
      </button>
      {showImages && (
        <div className="image-collection">
          <img
            src="https://source.unsplash.com/featured/?roses"
            alt="Rose"
            onClick={() =>
              showFullscreenImage("https://source.unsplash.com/featured/?roses")
            }
          />
          <img
            src="https://source.unsplash.com/featured/?roses"
            alt="Rose"
            onClick={() =>
              showFullscreenImage("https://source.unsplash.com/featured/?roses")
            }
          />
          <img
            src="https://source.unsplash.com/featured/?roses"
            alt="Rose"
            onClick={() =>
              showFullscreenImage("https://source.unsplash.com/featured/?roses")
            }
          />
          <img
            src="https://source.unsplash.com/featured/?roses"
            alt="Rose"
            onClick={() =>
              showFullscreenImage("https://source.unsplash.com/featured/?roses")
            }
          />
        </div>
      )}
    </div>
  );
};

export default Roses;
