import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { RiStarFill, RiStarHalfFill, RiStarLine } from "@remixicon/react"; // Import correct icons
import '../CSS/BookDetail.css'; // Optional: import your CSS file for styling

const BookDetail = ({ books }) => {
  // Get the book ID from the URL parameters
  const { id } = useParams();
  const bookId = parseInt(id, 10); // Convert the id to an integer

  // Find the book with the matching ID
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return <div>Book not found</div>; // Handle case where book is not found
  }

  return (
    <div className="book-detail">
      <img src={book.image} alt={book.title} className="book-detail__image" />
      <h2 className="book-detail__title">{book.title}</h2>
      <p className="book-detail__description">{book.description}</p>
      <div className="book-detail__prices">
        <span className="book-detail__discount">${book.discountPrice}</span>
        <span className="book-detail__original">${book.originalPrice}</span>
      </div>
      <div className="book-detail__rating">
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
      <Link to="/New" className="book-detail__back-button">Back to Books</Link>
    </div>
  );
};

export default BookDetail;

