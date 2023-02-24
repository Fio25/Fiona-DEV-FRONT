import React from 'react';
import './Slide.css';
import {photos} from './DataTableau';
import {useState} from 'react';

function Slide() {

    const [slide, setSlide] = useState(0);

    const handlePrev = () => {
        setSlide( slide === 0 ? photos.length -1 : slide - 1)
    };

    const handleNext = () => {
       setSlide( slide === photos.length - 1 ? 0 : slide + 1 )
    };

  return (
    <div className="containerSlider">

      <h1>Les ptites bohèmes</h1>

      <button 
      onClick={handlePrev} 
      className="bouton1">
        <i className ="fa-solid fa-arrow-left-long"></i>
        </button>

      <img src={photos[slide].src} alt=""/>

      <button 
      onClick={handleNext} 
      className="bouton2">
        <i className="fa-solid fa-arrow-right-long"></i>
        </button>

    </div>
  )
}

export default Slide
