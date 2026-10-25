
import { useEffect, useState } from 'react';

const GameCardMedia = ({ mediaType, media }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(0);
  }, [media, mediaType]);

  useEffect(() => {
    if (mediaType !== 'gallery' || media.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage((current) => (current + 1) % media.length);
    }, 3000
  );

    return () => clearInterval(interval);
  }, [mediaType, media.length]);

  if (!media || media.length === 0) {
    return null;
  }

  if (mediaType === 'video') {
    return (
      <video
        className="game-card-image"
        src={media[0]}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  if (mediaType === 'gif' || mediaType === 'image') {
    return (
      <img
        className="game-card-image"
        src={media[0]}
        alt=""
      />
    );
  }

  if (mediaType === 'gallery') {
  return (
      <div className="game-card-gallery">
        <div
          className="game-card-gallery-track"
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >
          {media.map((image, index) => (
            <img
              key={`${image}-${index}`}
              className="game-card-gallery-image"
              src={image}
              alt=""
            />
          ))}
        </div>
      </div>
    );
  }

    return null;
  };

export default GameCardMedia;
