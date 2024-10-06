import React from 'react';
import { RiStarFill, RiStarHalfFill, RiStarLine } from "@remixicon/react";
import '../CSS/ReviewsPage.css'; 

const ReviewCard = ({ image, name, description, rating }) => (
  <article className="testimonial__card">
    <img src={image} alt={name} className="testimonial__image" />
    <h2 className="testimonial__title">{name}</h2>
    <p className="testimonial__description">{description}</p>
    <div className="testimonial__stars">
      {Array.from({ length: 5 }, (_, i) => {
        if (i < Math.floor(rating)) {
          return <RiStarFill key={`${name}-${i}`} />;
        }
        if (i === Math.floor(rating) && rating % 1 !== 0) {
          return <RiStarHalfFill key={`${name}-${i}`} />;
        }
        return <RiStarLine key={`${name}-${i}`} />;
      })}
    </div>
  </article>
);

const ReviewsPage = () => {
  const reviews = [ 
    {
      id: 1,
      image: '/img/testimonial-perfil-1.png',
      name: 'Rial Loz',
      description: 'I recently bought a few novels from this site, and overall, I am quite pleased. The purchasing process was straightforward, and I found some great discounts, especially on bestsellers. The only issue was that one of my books arrived a bit damaged, but the customer service was helpful and processed a return quickly',
      rating: 4.5,
    },
    {
      id: 2,
      image: '/img/testimonial-perfil-2.png',
      name: 'Rial Loz',
      description: 'I cannot recommend this website enough! The process of finding and purchasing books is incredibly smooth and user-friendly. I scored some fantastic discounts on both new releases and classics. Plus, my order arrived much earlier than expected, and everything was in perfect condition. I love the variety they offer, and I will definitely be returning for more purchases!',
      rating: 5,
    },
    {
      id: 3,
      image: '/img/testimonial-perfil-3.png',
      name: 'Rial Loz',
      description: 'I had high hopes for this website after hearing good things, but my experience was just okay. The selection is vast, which is a plus, but I found some of the prices to be a bit higher than competitors, even with discounts. The checkout process was easy, but I faced delays in shipping, which was frustrating.',
      rating: 3.5,
    },
    {
      id: 4,
      image: '/img/testimonial-perfil-4.png',
      name: 'Rial Loz',
      description: 'Honestly, I was disappointed with my experience on this site. While the layout was user-friendly, I encountered issues during checkout, which made it stressful. I had a coupon code that didn’t work, and when I contacted customer support, their response was slow. I love finding good deals, but I think I will look elsewhere next time.',
      rating: 2,
    },
  ];

  return (
    <section className="testimonial section" id="testimonial">
    <h2 className="section__title">Customer Opinions</h2>
    <div className="testimonial__container container">
        {reviews.map((review) => (
            <ReviewCard 
                key={review.id}
                image={review.image}
                name={review.name}
                description={review.description}
                rating={review.rating}
            />
        ))}
    </div>
</section>

  );
};

export default ReviewsPage;
