
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
  { name: "Organic Bananas", price: 1.20, image: "https://pin.it/6JY8Hec5U" },
  { name: "Whole Wheat Bread", price: 3.00, image: "https://pin.it/4n2ACbMTh" },
  { name: "Fresh Milk", price: 2.80, image: "https://pin.it/6NoZ6zAgW" },
  { name: "Eggs (12 Pack)", price: 4.50, image: "https://pin.it/4Org4fhAl" },
  { name: "Orange Juice", price: 3.75, image: "https://pin.it/3YFFelnri" }
];

const discountedProducts = [
  { name: "Cereal - 20% off", price: 3.00, image: "https://pin.it/4OJThR4GM" },
  { name: "Pasta - 15% off", price: 1.50, image: "https://pin.it/3WVdVcdFl" },
  { name: "Chips - 10% off", price: 2.25, image: "https://pin.it/2ZVzvj8il" },
  { name: "Canned Beans - 25% off", price: 1.00, image: "https://pin.it/4f1cLPCG8" }
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
