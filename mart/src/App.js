import React, { useState, useCallback } from 'react';
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
    // ... your product list here
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
      product.name.toLowerCase().includes(lowercasedTerm) ||
      product.description.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredProducts(filtered);
  }, [products]);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header 
        cartCount={cartItems.length} 
        toggleCart={toggleCart} 
        onSearch={handleSearch}
      />
      <Hero />
      <Categories />
      <ProductList products={filteredProducts} addToCart={addToCart} />
      <DiscountedProducts products={products.filter(p => p.discounted)} addToCart={addToCart} />
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
