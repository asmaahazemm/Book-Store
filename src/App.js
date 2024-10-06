// import './App.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import Homepage from "./Pages/Homepage";
import DiscountPage from "./Pages/DiscountPage";
import NewPage from "./Pages/NewPage";
import BookDetail from "./Pages/BookDetail"; // Import the new BookDetail component

// Book images for the DiscountPage
let bookImage1 = '/img/discount-book-1.png';
let bookImage2 = '/img/discount-book-2.png';

// Array of new books to be passed to NewPage as props
const books = [
  {
    id: 1, 
    image: '/img/book-1.png',
    title: 'Book 1',
    discountPrice: 7.99,
    originalPrice: 14.99,
    rating: 4.5,
    description: 'Description for Book 1', // Add a description for detail page
  },
  {
    id: 2, 
    image: '/img/book-2.png',
    title: 'Book 2',
    discountPrice: 8.55,
    originalPrice: 15.99,
    rating: 4,
    description: 'Description for Book 2', // Add a description for detail page
  },
  {
    id: 3, 
    image: '/img/book-3.png',
    title: 'Book 3',
    discountPrice: 8.99,
    originalPrice: 14.99,
    rating: 3,
    description: 'Description for Book 3', // Add a description for detail page
  },
  {
    id: 4, 
    image: '/img/book-4.png',
    title: 'Book 4',
    discountPrice: 7.75,
    originalPrice: 11.99,
    rating: 3.5,
    description: 'Description for Book 4', // Add a description for detail page
  },
  {
    id: 5, 
    image: '/img/book-5.png',
    title: 'Book 5',
    discountPrice: 7.55,
    originalPrice: 12.99,
    rating: 5,
    description: 'Description for Book 5', // Add a description for detail page
  },
  {
    id: 6, 
    image: '/img/book-6.png',
    title: 'Book 6',
    discountPrice: 12.99,
    originalPrice: 21.99,
    rating: 3,
    description: 'Description for Book 6', // Add a description for detail page
  },
  {
    id: 7, 
    image: '/img/book-7.png',
    title: 'Book 7',
    discountPrice: 4.99,
    originalPrice: 10.99,
    rating: 3.5,
    description: 'Description for Book 7', // Add a description for detail page
  },
  {
    id: 8, 
    image: '/img/book-8.png',
    title: 'Book 8',
    discountPrice: 6.99,
    originalPrice: 12.99,
    rating: 4.5,
    description: 'Description for Book 8', // Add a description for detail page
  },
  {
    id: 9, 
    image: '/img/book-9.png',
    title: 'Book 9',
    discountPrice: 10.75,
    originalPrice: 16.99,
    rating: 5,
    description: 'Description for Book 9', // Add a description for detail page
  },
  {
    id: 10, 
    image: '/img/book-10.png',
    title: 'Book 10',
    discountPrice: 9.99,
    originalPrice: 16.99,
    rating: 2.5,
    description: 'Description for Book 10', // Add a description for detail page
  },
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/Home" element={<Homepage />} />
          <Route path="/Discount" element={<DiscountPage bookImage1={bookImage1} bookImage2={bookImage2} />} />
          <Route path="/New" element={<NewPage books={books} />} />
          <Route path="/books/:id" element={<BookDetail books={books} />} /> {/* New route for book detail */}
          {/* You can add more routes for other pages */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
