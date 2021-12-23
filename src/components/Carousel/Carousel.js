import React from 'react'
import {CarouselC, CarouselItem, Color} from './Elements'

const Carousel = () => {
    window.onload = function(){
        var slides = document.getElementsByClassName('carousel-item'),
            addActive = function(slide) {slide.classList.add('active')},
            removeActive = function(slide) {slide.classList.remove('active')};
        addActive(slides[0]);
        
        setInterval(function (){
          for (var i = 0; i < slides.length; i++){
            if (i + 1 == slides.length) {
              addActive(slides[0]);
              slides[0].style.zIndex = 100;
              setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
              break;
            }
            if (slides[i].classList.contains('active')) { 
              slides[i].removeAttribute('style');
              setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
              addActive(slides[i + 1]);
              break;
            }
          } 
        }, 4000);
      }      


    return (
        <>
            <CarouselC>
                <CarouselItem className='carousel-item'>
                    <Color className="red"></Color>
                </CarouselItem>
                <CarouselItem className='carousel-item'>
                    <Color className="blue"></Color>
                </CarouselItem >
                <CarouselItem className='carousel-item'>
                    <Color className="yellow"></Color>
                </CarouselItem>
                <CarouselItem className='carousel-item'>
                    <Color className="green"></Color>
                </CarouselItem>
            </CarouselC>
        </>
    )
}

export default Carousel
