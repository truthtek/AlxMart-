// src/App.js
import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import DiscountedProducts from './components/DiscountedProducts';
import CartModal from './components/CartModal';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([
    // Your product list here
    { id: 1, name: 'Apple', price: 0.5, image: 'https://picsum.photos/200/200?random=1' },
    { id: 2, name: 'Banana', price: 0.3, image: 'https://picsum.photos/200/200?random=2' },
    { id: 3, name: 'Orange', price: 0.4, image: 'https://picsum.photos/200/200?random=3' },
    // Add more products as needed
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const addToCart = (name, price) => {
    setCartItems([...cartItems, { name, price }]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const checkout = () => {
    alert('Thank you for your purchase!');
    setCartItems([]);
    setIsCartOpen(false);
  };

  const handleSearch = useCallback((searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredProducts(filtered);
  }, [products]);

  // Reset filtered products when products change
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header 
        cartCount={cartItems.length} 
        toggleCart={toggleCart} 
        onSearch={handleSearch}
      />
      <Hero />
      <Categories />
      <ProductList products={filteredProducts} addToCart={addToCart} />
      <DiscountedProducts 
        products={products.filter(p => p.discounted)} 
        addToCart={addToCart} 
      />
      <CartModal 
        isOpen={isCartOpen} 
        cart={cartItems} 
        total={cartItems.reduce((sum, item) => sum + item.price, 0)}
        toggleCart={toggleCart}
        checkout={checkout}
      />
      <Footer />
    </div>
  );
}

export default App;
