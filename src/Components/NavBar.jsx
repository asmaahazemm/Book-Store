import { RiBook3Line, RiBookmarkLine, RiHomeLine, RiMessage3Line, RiMoonLine, RiPriceTag3Line, RiSearchLine, RiUserLine} from "@remixicon/react";
import '../CSS/Navbar.css';
import React from 'react';

function NavBar() {
    let style= {
        fontSize: '1.25rem',

    }
  return (
    <header className= "header" id="header">
        <nav className= "nav container">
            <a href="" className="nav__logo">
                <RiHomeLine style={style} size={18}/>E-Book
            </a>
            <div className="nav__menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <RiHomeLine style={style} size= {18}/> Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#features" className="nav__link">
                            <RiBook3Line style={style} size={18}/>Featured
                    </a>
                    </li>
                    <li className="nav__item">
                        <a href="#discount" className="nav__link">
                            <RiPriceTag3Line style={style} size={18} /> Discount
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#newBook" className="nav__link">
                            <RiBookmarkLine style={style} size={18}/> New Book
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#testimonial" className="nav__link">
                            <RiMessage3Line style={style} size={18}/> Testimonial
                        </a>
                    </li>
                </ul>
            </div>

            <div className="nav__action">
                {/* Search */}
                <RiSearchLine style={style} size ={18} className="search-button" id="search-button"/>
                {/* Login Button */}
                <RiUserLine style={style} size= {18} className="login-button" id="login-button"/>
                {/* Theme Button */}
                <RiMoonLine style={style} size={18} className="change-theme" />
            </div>
        </nav>
    </header>
  );
}

export default NavBar;
