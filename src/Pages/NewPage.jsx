import React from 'react';
import { RiStarFill, RiStarHalfFill, RiStarLine } from "@remixicon/react"; 
import '../CSS/NewPage.css'; 

const NewPage = ({ books }) => {
  return (
    <section className="new section" id="new">
      <h2 className="head">Asmaa</h2>
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

      <section class="join section">
        <div class="join_container">
        <img src="/img/bckgrnd.jpg" alt="Join background" class="join__bg"/>
            <div class="join__data container grid">
                <h2 class="join__title section_title">
                    Subscribe To Receive <br></br>
                    The Latest Updates 
                    </h2>
                    <form action="" class="join__form">
                        <input type="email" placeholder= "Enter email" class="join__input"></input>
                        <button type="submit" class="join__button button">Subscribe </button>
                        </form>
             </div>
        </div>
        </section>
    </section>
  );
};

export default NewPage;
