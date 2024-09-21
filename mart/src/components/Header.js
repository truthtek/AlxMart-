// src/components/Header.js
import React, { useState, useEffect } from 'react';

function Header({ cartCount, toggleCart, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchTerm(transcript);
        onSearch(transcript);
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };

      setRecognition(recognition);
    }
  }, [onSearch]);

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleVoiceSearch = () => {
    if (recognition) {
      if (isListening) {
        recognition.stop();
        setIsListening(false);
      } else {
        recognition.start();
        setIsListening(true);
      }
    } else {
      alert('Your browser does not support voice search.');
    }
  };

  return (
    <header className="p-4 flex flex-wrap items-center justify-between neumorphic">
      <div className="logo animate__animated animate__fadeIn">AlxMart</div>
      <div className="search-bar flex-grow mx-4 my-2 flex items-center">
        <label htmlFor="searchInput" className="sr-only">Search</label>
        <input 
          type="text" 
          id="searchInput" 
          placeholder="Search products" 
          className="w-full p-2 rounded-l neumorphic" 
          aria-label="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button 
          className="p-2 neumorphic rounded-r"
          onClick={handleSearch}
          aria-label="Search"
        >
          <i className="fas fa-search"></i>
        </button>
        <button 
          className={`ml-2 p-2 neumorphic rounded-full ${isListening ? 'bg-red-500' : ''}`}
          onClick={handleVoiceSearch}
          aria-label="Voice search"
        >
          <i className={`fas ${isListening ? 'fa-stop' : 'fa-microphone'}`}></i>
        </button>
      </div>
      <button className="cart-btn px-4 py-2 rounded neumorphic animate__animated animate__bounceIn" aria-label="Open cart" onClick={toggleCart}>
        <i className="fas fa-shopping-cart mr-2"></i>Cart ({cartCount})
      </button>
    </header>
  );
}

export default Header;
