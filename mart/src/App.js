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
  { name: "Fresh Apples", price: 2.50, image: "https://picsum.photos/300/200?random=1" },
  { name: "Organic Bananas", price: 1.20, image: "https://picsum.photos/300/200?random=2" },
  { name: "Whole Wheat Bread", price: 3.00, image: "https://picsum.photos/300/200?random=3" },
  { name: "Fresh Milk", price: 2.80, image: "https://picsum.photos/300/200?random=4" },
  { name: "Eggs (12 Pack)", price: 4.50, image: "https://picsum.photos/300/200?random=5" },
  { name: "Orange Juice", price: 3.75, image: "https://picsum.photos/300/200?random=6" }
];

const discountedProducts = [
  { name: "Cereal - 20% off", price: 3.00, image: "https://picsum.photos/300/200?random=7" },
  { name: "Pasta - 15% off", price: 1.50, image: "https://picsum.photos/300/200?random=8" },
  { name: "Chips - 10% off", price: 2.25, image: "https://picsum.photos/300/200?random=9" },
  { name: "Canned Beans - 25% off", price: 1.00, image: "https://picsum.photos/300/200?random=10" }
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
        <input // Search bar within Header
          type="text"
