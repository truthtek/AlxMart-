import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    { name: "Fresh Apples", price: 2.50, image: "https://picsum.photos/300/200?random=1" },
    { name: "Organic Bananas", price: 1.20, image: "https://picsum.photos/300/200?random=2" },
    { name: "Whole Wheat Bread", price: 3.00, image: "https://picsum.photos/300/200?random=3" },
    { name: "Fresh Milk", price: 2.80, image: "https://picsum.photos/300/200?random=4" },
    { name: "Eggs (12 Pack)", price: 4.50, image: "https://picsum.photos/300/200?random=5" },
    { name: "Orange Juice", price: 3.75, image: "https://picsum.photos/300/200?random=6" }
  ];

  const addToCart = (name, price) => {
    setCart([...cart, { name, price }]);
    setTotal(total + price);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const checkout = () => {
    alert(`Thank you for your purchase! Total: $${total.toFixed(2)}`);
    setCart([]);
    setTotal(0);
    toggleCart();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleCart={toggleCart} />
      <main className="flex-grow p-4">
        <HeroSection />
        <CategorySection />
        <ProductList products={products} addToCart={addToCart} />
      </main>
      {isCartOpen && <Cart cart={cart} total={total} toggleCart={toggleCart} checkout={checkout} />}
      <footer className="p-4 text-center">© 2024 AlxMart. All rights reserved.</footer>
    </div>
  );
}

export default App;
