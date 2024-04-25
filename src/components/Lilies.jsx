import React, { useState } from "react";
import "./Flower.css";

const Lilies = ({ showFullscreenImage }) => {
  const [showImages, setShowImages] = useState(false);

  return (
    <div className="flower-container">
      <button className="btn" onClick={() => setShowImages(!showImages)}>
        Lilies
      </button>
      {showImages && (
        <div className="image-collection">
          <img
            src="https://source.unsplash.com/featured/?lily"
            alt="Lily"
            onClick={() =>
              showFullscreenImage("https://source.unsplash.com/featured/?lily")
            }
          />
          <img
            src="https://source.unsplash.com/featured/?lily"
            alt="Lily"
            onClick={() =>
              showFullscreenImage("https://source.unsplash.com/featured/?lily")
            }
          />
          <img
            src="https://source.unsplash.com/featured/?lily"
            alt="Lily"
            onClick={() =>
              showFullscreenImage("https://source.unsplash.com/featured/?lily")
            }
          />
          <img
            src="https://source.unsplash.com/featured/?lily"
            alt="Lily"
            onClick={() =>
              showFullscreenImage("https://source.unsplash.com/featured/?lily")
            }
          />
        </div>
      )}
    </div>
  );
};

export default Lilies;
