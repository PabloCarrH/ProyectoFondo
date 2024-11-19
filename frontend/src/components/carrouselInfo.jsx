import React, { useEffect, useRef, useState } from 'react';
import { data } from '../assets/data';
import '../Estilos/componentes.css';

const Carrousel = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll('li > img')[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

;

  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex((curr) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? data.length - 1 : curr - 1;
      });
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex((curr) => curr + 1);
      }
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="main-container">
      <div className="slider-container">
        <div
          className="leftArrow"
          onClick={() => scrollToImage('prev')}
        >
          &#10092;
        </div>
        <div
          className="rightArrow"
          onClick={() => scrollToImage('next')}
        >
          &#10093;
        </div>
        <div className="container-images">
          <ul ref={listRef}>
            {data.map((item) => {
              return (
                <li key={item.id}>
                  <img
                    src={item.imgUrl}
                    width={600}
                    height={400}
                    alt={`Slide ${item.id}`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="indicators">
          {data.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
