import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import DiscountedProducts from './components/DiscountedProducts';
import CartModal from './components/CartModal';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import './index.css';

const products = [
  // ... your product data
];

const discountedProducts = [
  // ... your discounted product data
];

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [filteredProducts, setFilteredProducts] = useState(products); // State for filtered products

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const addToCart = (name, price) => {
    setCart([...cart, { name, price }]);
    setTotal(prevTotal => prevTotal + price);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const checkout = () => {
    alert(`Thank you for your purchase! Total: $${total.toFixed(2)}`);
    setCart([]);
    setTotal(0);
    setIsCartOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); // Lowercase for case-insensitive search
  };

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter(product => product.name.toLowerCase().includes(searchTerm));
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Reset to all products when search term is empty
    }
  }, [searchTerm]); // Dependency on searchTerm for filtering

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={cart.length} toggleCart={toggleCart}>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border rounded-md px-3 py-2" // Add styling for the search bar
        />
      </Header>
      <main className="flex-grow">
        <Hero />
        <Categories />
        <ProductList products={filteredProducts} addToCart={addToCart} /> // Use filteredProducts for search results
        <DiscountedProducts products={discountedProducts} addToCart={addToCart} />
      </main>
      <CartModal
        isOpen={isCartOpen}
        cart={cart}
        total={total}
        toggleCart={toggleCart}
        checkout={checkout}
      />
      <Footer />
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
