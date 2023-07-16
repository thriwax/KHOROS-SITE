import React, { useRef, useEffect } from 'react';
import podcasts from '@/utils/podcasts';
import PodcastCard from '@/UI/PodcastCard/PodcastCard';

const ProductList = ({ products }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      containerRef.current.scrollLeft += event.deltaY;
    };

    const containerElement = containerRef.current;
    containerElement.addEventListener('wheel', handleWheel);

    return () => {
      containerElement.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div
      className="product-list-container"
      ref={containerRef}
    >
      <div className="product-list">
      {podcasts.map((podcast) => (
  <PodcastCard key={podcast.id} id={podcast.id} artist={podcast.artist} img={podcast.img}/>
))}
      </div>
    </div>
  );
};

export default ProductList;

