
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
  { name: "Fresh Apples", price: 2.50, image: "https://pixabay.com/photos/apple-red-fruit-red-chief-1702316/" },
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={cart.length} toggleCart={toggleCart} />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <ProductList products={products} addToCart={addToCart} />
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
