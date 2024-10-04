import { RiBook3Line, RiBookmarkLine, RiHomeLine, RiMessage3Line, RiMoonLine, RiPriceTag3Line, RiSearchLine, RiUserLine } from "@remixicon/react";
import '../CSS/Navbar.css';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Login from './Login'; 

function NavBar() {
    let [isSearchVisible, setIsSearchVisible] = useState(false);
    let [isLoginVisible, setIsLoginVisible] = useState(false);  

    let style = {
        fontSize: '20px',
    };

    let style_action = {
        fontSize: "16px",
        color: 'hsl(230, 70%, 16%)',
        cursor: 'pointer',
        transition: 'color .4',
    };

    let toggleSearch = () => {
        setIsSearchVisible(prevState => !prevState);
    };

    let handleSearch = (query) => {
        console.log("Searching for:", query);
    };

    let closeSearch = () => {
        setIsSearchVisible(false);
    };

    let toggleLogin = () => {
        setIsLoginVisible(prevState => !prevState);
    };

    let closeLogin = () => {
        setIsLoginVisible(false);
    };

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">
                    <RiHomeLine style={style} size={25}/> E-Book
                </a>
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <RiHomeLine style={style} size={25}/> 
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
                                <RiPriceTag3Line style={style} size={25}/> 
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
                    {/* Search Icon */}
                    <RiSearchLine 
                        style={style_action} 
                        size={25} 
                        className="search-button" 
                        id="search-button" 
                        onClick={toggleSearch} 
                    />

                    {/* Search Bar visibility */}
                    {isSearchVisible && (
                        <SearchBar onSearch={handleSearch} onClose={closeSearch} />
                    )}

                    {/* Login Icon */}
                    <RiUserLine 
                        style={style_action} 
                        size={25} 
                        className="login-button" 
                        id="login-button" 
                        onClick={toggleLogin} 
                    />

                    {/* Login modal visibility */}
                    {isLoginVisible && (
                        <Login onClose={closeLogin} />
                    )}

                    {/* Theme Button */}
                    <RiMoonLine style={style_action} size={25} className="change-theme" />
                </div>
            </nav>
        </header>
    );
}

export default NavBar;

