import { RiBook3Line, RiBookmarkLine, RiHomeLine, RiMessage3Line, RiMoonLine, RiPriceTag3Line, RiSearchLine, RiUserLine} from "@remixicon/react";
import '../CSS/Navbar.css';
import React from 'react';

function NavBar() {
    let style= {
        fontSize: '20px',
        // paddingLeft: '5px'
    }
    let style_action ={
        fontSize: "16px",
        color:'hsl(230, 70%, 16%)',
        cursor: 'pointer',
        transition: 'color .4',
    }
  return (
    <header className= "header" id="header">
        <nav className= "nav container">
            <a href="" className="nav__logo">
                <RiHomeLine style={style} size={25}/> E-Book
            </a>
            <div className="nav__menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <RiHomeLine style={style} size= {25}/> 
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#features" className="nav__link">
                            <RiBook3Line style={style} size={25}/>
                            <span>Featured</span>
                    </a>
                    </li>
                    <li className="nav__item">
                        <a href="#discount" className="nav__link">
                            <RiPriceTag3Line style={style} size={25} /> 
                            <span>Discount</span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#newBook" className="nav__link">
                            <RiBookmarkLine style={style} size={25}/> 
                            <span>New Book</span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#testimonial" className="nav__link">
                            <RiMessage3Line style={style} size={25}/> 
                            <span>Testimonial</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="nav__action">
                {/* Search */}
                <RiSearchLine style={style_action} size ={25} className="search-button" id="search-button"/>
                {/* Login Button */}
                <RiUserLine style={style_action} size= {25} className="login-button" id="login-button"/>
                {/* Theme Button */}
                <RiMoonLine style={style_action} size={25} className="change-theme" />
            </div>
        </nav>
    </header>
  );
}

export default NavBar;
