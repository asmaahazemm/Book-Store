import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiBook3Line, RiBookmarkLine, RiHomeLine, RiMessage3Line, RiPriceTag3Line, RiSearchLine, RiUserLine } from "@remixicon/react";
import '../CSS/Navbar.css';
import SearchBar from './SearchBar';
import Login from './Login'; 


function NavBar() {
    let [isSearchVisible, setIsSearchVisible] = useState(false);
    let [isLoginVisible, setIsLoginVisible] = useState(false);  

    let comstyle ={
        color: 'red'

    }
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
                    <span id="company-Name">E-Book</span>
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/" className="nav__link"> {}
                                <RiHomeLine style={style} size={25}/> 
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/features" className="nav__link"> {}
                                <RiBook3Line style={style} size={25}/>
                                <span>Featured</span>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/discount" className="nav__link"> {}
                                <RiPriceTag3Line style={style} size={25}/> 
                                <span>Discount</span>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/New" className="nav__link"> {}
                                <RiBookmarkLine style={style} size={25}/> 
                                <span>New Books</span>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/Reviews" className="nav__link"> {}
                                <RiMessage3Line style={style} size={25}/> 
                                <span>Reviews</span>
                            </Link>
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
                </div>
            </nav>
        </header>
    );
}

export default NavBar;

