import React from 'react';
import { RiStarFill, RiStarHalfFill, RiStarLine } from "@remixicon/react"; 
import '../CSS/NewPage.css'; 

const NewPage = ({ books }) => {
  return (
    <section className="new section" id="new">
      <h2 className="head">New Books</h2>
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
      <br></br>
      <br></br>

      <section className="join section">
        <div className="join_container">
        <img src="/img/bckgrnd.jpg" alt="Join background" className="join__bg"/>
            <div className="join__data container grid">
                <h2 className="join__title section_title">
                    Subscribe To Receive <br></br>
                    The Latest Updates 
                    </h2>
                    <form action="" className="join__form">
                        <input type="email" placeholder= "Enter email" className="join__input"></input>
                        <button type="submit" className="join__button button">Subscribe </button>
                        </form>
             </div>
        </div>
        </section>
    </section>
  );
};

export default NewPage;
