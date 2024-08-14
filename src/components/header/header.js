import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-top">
                {['Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor'].map((text, index) => (
                    <div key={index} className="header-item">
                        <img
                            className="header-icon"
                            src={require('../../images/firstline.png')}
                            alt="Icon"
                        />
                        <span className="header-text">{text}</span>
                    </div>
                ))}
            </div>

            <div className="header-main">
                <div className='logoandburger'>
                    <i class="burgericon fa-solid fa-bars"></i>
                    <img
                        className="header-logo"
                        src={require('../../images/logo.png')}
                        alt="logo"
                    />
                </div>
                <span className="header-title">LOGO</span>
                <div className="header-icons">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-solid fa-cart-plus"></i>
                    <i className="remove-icon fa-regular fa-user"></i>
                    <div className="header-lang remove-icon">
                        <span className="header-lang-text">ENG</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
            </div>

            <nav className="header-nav">
                {['SHOP', 'SKILLS', 'STORIES', 'ABOUT', 'CONTACT US'].map((link, index) => (
                    <div key={index} className="header-nav-item">
                        <a href="#">{link}</a>
                    </div>
                ))}
            </nav>

            <div className='path'>
                <span className="path-item path-item-home">HOME</span>
                <span className="path-item path-item-home">|</span>
                <span className="path-item">SHOP</span>
            </div>

        </header>
    );
};

export default Header;