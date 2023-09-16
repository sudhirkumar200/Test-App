import React from 'react';

function ExampleCarouselImage({ text }) {
  return (
    <img
      className="d-block w-100"
      src={`https://placeimg.com/800/400/nature?text=${text}`}
      alt={`Slide with ${text}`}
    />
  );
}

export default ExampleCarouselImage;
