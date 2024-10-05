import React from 'react';
import { RiStarFill, RiStarHalfFill, RiStarLine } from "@remixicon/react"; 
import '../CSS/NewPage.css'; 

const NewPage = ({ books }) => {
  return (
    <section className="new section" id="new">
      <h2 id="head2">Asmaa</h2>
      <div className="new__container container">
        {books.map((book) => (
          <a key={book.id} href={`/books/${book.id}`} className="new__card">
            <img src={book.image} alt={book.title} className="new__img" />
            <div>
              <h2 className="new__title">{book.title}</h2>
              <div className="new__prices">
                <span className="new__discount">${book.discountPrice}</span>
                <span className="new__price">${book.originalPrice}</span>
              </div>
              <div className="new__stars">
                {Array.from({ length: 5 }, (_, i) => {
                  if (i < Math.floor(book.rating)) {
                    return <RiStarFill key={`${book.id}-${i}`} />;
                  }
                  if (i === Math.floor(book.rating) && book.rating % 1 !== 0) {
                    return <RiStarHalfFill key={`${book.id}-${i}`} />;
                  }
                  return <RiStarLine key={`${book.id}-${i}`} />;
                })}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default NewPage;
