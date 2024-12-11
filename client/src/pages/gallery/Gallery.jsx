import React from 'react';
import './Gallery.scss';
import one from '../../assets/gallery/1.jpg';
import two from '../../assets/gallery/2.jpg';
import three from '../../assets/gallery/3.jpg';
import four from '../../assets/gallery/4.jpg';
import five from '../../assets/gallery/5.jpg';
import six from '../../assets/gallery/6.jpg';
import seven from '../../assets/gallery/7.jpg';
import eight from '../../assets/gallery/8.jpg';
import nine from '../../assets/gallery/9.jpg';

function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-item"><img src={one} alt="Image 1" /></div>
      <div className="gallery-item"><img src={two} alt="Image 2" /></div>
      <div className="gallery-item"><img src={four} alt="Image 4" /></div>
      <div className="gallery-item"><img src={five} alt="Image 5" /></div>
      <div className="gallery-item"><img src={six} alt="Image 6" /></div>
      <div className="gallery-item"><img src={seven} alt="Image 7" /></div>
      <div className="gallery-item"><img src={eight} alt="Image 8" /></div>
      <div className="gallery-item"><img src={nine} alt="Image 9" /></div>
    </div>
  );
}

export default Gallery;
