// import {container} from'bootstrap/dist/css/bootstrap.min.css';
// import {} from 'react-bootstrap';
import React from 'react';
import '../CSS/Common.css';
import '../CSS/Homepage.css';
import Slider from '../Components/Slider';
// import HomeTest from "../Components/HomeTest";



function HomePage() {
  return (

    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_data">
          <h1 className='home_title'>Browse & <br/> Select E-Books</h1>
          <p className="home_description">
            Find the best e-books from your favorite writers, explore hundreds of books with all possible categories, take advantage of the 50% discount and much more. 
          </p>
          <a href="#"className="button">Explore Now</a>
        </div>
        <div className="home_images">
          <Slider/>
        </div>
          <br/>
          <br/>
          <br/>
      </div>
    </section>

  );
}

export default HomePage;
