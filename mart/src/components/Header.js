// src/components/Header.js
import React from 'react';

function Header({ cartCount, toggleCart }) {
  return (
    <header className="p-4 flex flex-wrap items-center justify-between neumorphic">
      <div className="logo animate__animated animate__fadeIn">AlxMart</div>
      <div className="search-bar flex-grow mx-4 my-2">
        <label htmlFor="searchInput" className="sr-only">Search</label>
        <input type="text" id="searchInput" placeholder="Search products" className="w-full p-2 rounded neumorphic" aria-label="Search products" />
      </div>
      <button className="cart-btn px-4 py-2 rounded neumorphic animate__animated animate__bounceIn" aria-label="Open cart" onClick={toggleCart}>
        <i className="fas fa-shopping-cart mr-2"></i>Cart ({cartCount})
      </button>
    </header>
  );
}

export default Header;
