import React from 'react';
import '../CSS/Common.css';
import '../CSS/DiscountPage.css';

const DiscountPage = ({ bookImage1, bookImage2 }) => {
  return (
    <section className="discount section" id="discount">
      <div className="discount__container container grid">
        {/* Discount Text Section */}
        <div className="discount__data">
          <h2 className="discount_title section_title">
            Up To 50% Discount
          </h2>
          <p className="discount__description">
            Take advantage of the discount days we have for you, buy books from your favorite writers, the more you buy, the more discounts we have for you.
          </p>
          <a href="#DiscountPage" className="button">Shop Now</a>
        </div>
        
        {/* Discount Image Section */}
        <div className="discount__images">
          {/* Use the passed props to display the images */}
          <img src={bookImage1} alt="Discount Book 1" className="discount_img-1" />
          <img src={bookImage2} alt="Discount Book 2" className="discount_img-2" />
        </div>
      </div>
    </section>
  );
};

export default DiscountPage;


