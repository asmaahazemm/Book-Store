// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import Homepage from "./Pages/Homepage";
import DiscountPage from "./Pages/DiscountPage";

let bookImage1 = '/img/discount-book-1.png';
let bookImage2 = '/img/discount-book-2.png';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/Home" element={<Homepage />} />
          <Route path="/discount" element={<DiscountPage bookImage1={bookImage1} bookImage2={bookImage2} />} />
          {/* You can add more routes for other pages */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
