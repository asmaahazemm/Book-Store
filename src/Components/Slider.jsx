// import React, { useState, useEffect } from 'react';
// import '../CSS/Slider.css'
// function Slider(){
//     let currentSlider = 0;

//     let imageCount = document.querySelectorAll("img");
//     let image = document.querySelector("ul");

//     if (imageCount.length === 0){
//         imageCount = document.querySelectorAll("img");
//         image.style.transform =`translateX(0px)`;
//         return;
//     }

//     image.style.transform = `translate(-${currentSlider * 550}px)`;

//     if (currentSlider === imageCount.length -1){
//         currentSlider = 0;
//     } else{
//         currentSlider ++;
//     }

//     setInterval(()=>{
//         Slider();
//     }, 3000);

//     // remove the active class from all dots
//     let dots= document.querySelectorAll("dot");
//     dots.forEach(dot => {
//         dot.classList.remove("active");
//     });

//     //Add the active class to the current dot
//     dots(currentSlider).classList.add("active");
//     return(
//         <div className="big-container">
//             <div className="slider">
//                 <ul>
//                     <li><img src="./img/home-book-1.png" alt="img"/></li>
//                     <li><img src="./img/home-book-2.png" alt="img"/></li>
//                     <li><img src="./img/home-book-3.png" alt="img"/></li>
//                     <li><img src="./img/home-book-4.png" alt="img"/></li>
//                 </ul>
//             </div>
//             <div className="pagination-dots">
//                 <span className="dot active"></span>
//                 <span className="dot"></span>
//                 <span className="dot"></span>
//                 <span className="dot"></span>
//             </div>
//         </div>
//     );
// }

// export default Slider;
import React, { useState, useEffect } from 'react';
import '../CSS/Slider.css'; // Import your CSS file

function Slider() {
  const [images, setImages] = useState([ // Array of image paths (initially empty)
    './img/home-book-1.png', // Replace with your image paths
    './img/home-book-2.png',
    './img/home-book-3.png',
    './img/home-book-4.png',
  ]);
  const [currentSlider, setCurrentSlider] = useState(0); // State for current slide

  useEffect(() => {
    // No need to use document.querySelectorAll here
  }, []); // Empty dependency array ensures this runs only once on component mount

  const handleSlideChange = (direction) => {
    if (direction === 'left' && currentSlider === 0) {
      setCurrentSlider(images.length - 1); // Wrap around to last image
    } else if (direction === 'right' && currentSlider === images.length - 1) {
      setCurrentSlider(0); // Wrap around to first image
    } else {
      setCurrentSlider((prevState) =>
        direction === 'left' ? prevState - 1 : prevState + 1
      );
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleSlideChange('right'); // Slide right every 3 seconds
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
  }, [currentSlider]); // Re-run useEffect when currentSlider changes

  const renderDots = () => {
    return images.map((_, index) => (
      <span key={index} className={`dot ${index === currentSlider ? 'active' : ''}`} />
    ));
  };

  return (
    <div className="big-container">
      <div className="slider">
        <ul style={{ width: '550px', overflow: 'hidden' }}> {/* Set width and overflow */}
          {images.map((imageSrc, index) => (
            <li key={index} style={{ width: '550px', float: 'left', display: index === currentSlider ? 'block' : 'none' }}> {/* Set width, float, and display */}
              <img src={imageSrc} alt="img" />
            </li>
          ))}
        </ul>
        <div className="pagination-dots">{renderDots()}</div>
      </div>
      
    </div>
  );
}

export default Slider;