import React, { useState } from "react";
import "./Flower.css";

const Tulips = ({ showFullscreenImage }) => {
  const [showImages, setShowImages] = useState(false);

  return (
    <div className="flower-container">
      <button className="btn" onClick={() => setShowImages(!showImages)}>
        Tulips
      </button>
      {showImages && (
        <div className="image-collection">
          <img
            src="https://source.unsplash.com/featured/?tulip"
            alt="Tulip"
            onClick={() =>
              showFullscreenImage("https://source.unsplash.com/featured/?tulip")
            }
          />
          <img
            src="https://source.unsplash.com/featured/?tulip"
            alt="Tulip"
            onClick={() =>
              showFullscreenImage("https://source.unsplash.com/featured/?tulip")
            }
          />
          <img
            src="https://source.unsplash.com/featured/?tulip"
            alt="Tulip"
            onClick={() =>
              showFullscreenImage("https://source.unsplash.com/featured/?tulip")
            }
          />
          <img
            src="https://source.unsplash.com/featured/?tulip"
            alt="Tulip"
            onClick={() =>
              showFullscreenImage("https://source.unsplash.com/featured/?tulip")
            }
          />
        </div>
      )}
    </div>
  );
};

export default Tulips;
