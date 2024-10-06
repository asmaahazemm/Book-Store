import React, { useState, useEffect } from 'react';
import '../CSS/Common.css';
import '../CSS/DiscountPage.css';

const DiscountPage = ({ bookImage1, bookImage2 }) => {

  const discountEndTime = new Date(Date.now() + 24 * 60 * 60 * 1000).getTime();

  const [timeRemaining, setTimeRemaining] = useState(discountEndTime - Date.now());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeRemaining(discountEndTime - Date.now());
    }, 1000);


    return () => clearInterval(timerId);
  }, [discountEndTime]);

  const formatTime = (time) => {
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <section className="discount section" id="discount">
      <div className="discount__container container grid">
        <div className="discount__data">
          <h2 className="discount_title section_title">
            Up To 50% Discount
          </h2>
          <p className="discount__description">
            Take advantage of the discount days we have for you, buy books from your favorite writers, the more you buy, the more discounts we have for you.
          </p>
          
          <div className="discount__timer">
            <h3>Hurry! Offer ends in:</h3>
            <p>{timeRemaining > 0 ? formatTime(timeRemaining) : "Discount has ended!"}</p>
          </div>
          
          <a href="#DiscountPage" className="button">Shop Now</a>
        </div>
        
        <div className="discount__images">
          <img src={bookImage1} alt="Discount Book 1" className="discount_img-1" />
          <img src={bookImage2} alt="Discount Book 2" className="discount_img-2" />
        </div>
      </div>
    </section>
  );
};

export default DiscountPage;

