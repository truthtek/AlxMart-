import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faBreadSlice, faCheese, faDrumstickBite, faMoon, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'tailwindcss/tailwind.css';
import 'animate.css/animate.min.css';
import 'styles.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  const products = [
    { id: 1, name: "Fresh Apples", price: 2.99, category: "fruits", image: "https://picsum.photos/300/200?random=1" },
    { id: 2, name: "Whole Wheat Bread", price: 3.49, category: "bakery", image: "https://picsum.photos/300/200?random=2" },
    { id: 3, name: "Organic Eggs", price: 4.99, category: "dairy", image: "https://picsum.photos/300/200?random=3" },
    { id: 4, name: "Atlantic Salmon", price: 12.99, category: "meat", image: "https://picsum.photos/300/200?random=4" },
    { id: 5, name: "Fresh Spinach", price: 1.99, category: "fruits", image: "https://picsum.photos/300/200?random=5" },
    { id: 6, name: "Sourdough Bread", price: 4.99, category: "bakery", image: "https://picsum.photos/300/200?random=6" },
    { id: 7, name: "Greek Yogurt", price: 3.49, category: "dairy", image: "https://picsum.photos/300/200?random=7" },
    { id: 8, name: "Grass-fed Beef", price: 9.99, category: "meat", image: "https://picsum.photos/300/200?random=8" },
  ];

  useEffect(() => {
    // Apply dark mode class to body
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const Header = () => (
    <header className="p-4 flex flex-wrap items-center justify-between neumorphic">
      <div className="logo animate__animated animate__fadeIn text-2xl font-bold">AlxMart</div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input type="text" id="search-input" placeholder="Search products" className="neumorphic-inset py-2 px-4 pr-10 w-64" aria-label="Search products" />
          <button id="mic-button" className="mic-button absolute right-2 top-1/2 transform -translate-y-1/2" aria-label="Search by voice">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </button>
        </div>
        <button id="cartBtn" className="cart-btn px-4 py-2 rounded neumorphic animate__animated animate__bounceIn" aria-label="Open cart">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />Cart ({cart.length})
        </button>
        <button id="darkModeToggle" className="ml-4 neumorphic p-2 rounded-full" aria-label="Toggle dark mode" onClick={() => setDarkMode(!darkMode)}>
          <FontAwesomeIcon icon={faMoon} />
        </button>
      </div>
    </header>
  );

  const Hero = () => (
    <section className="hero-section mb-8">
      <div className="hero-content animate__animated animate__fadeIn">
        <h1 className="text-4xl font-bold mb-4">Welcome to AlxMart</h1>
        <p className="text-xl mb-6">Your one-stop shop for all your daily needs. Enjoy fast delivery and amazing discounts!</p>
        <div className="flex justify-center space-x-4">
          <button className="category-btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setCurrentCategory('all')}>All Products</button>
          <button className="category-btn bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" onClick={() => setCurrentCategory('fruits')}>Fruits & Vegetables</button>
          <button className="category-btn bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded" onClick={() => setCurrentCategory('bakery')}>Bakery</button>
          <button className="category-btn bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" onClick={() => setCurrentCategory('meat')}>Meat & Seafood</button>
        </div>
      </div>
    </section>
  );

  const Categories = () => (
    <section aria-labelledby="categoriesTitle" className="mb-8 p-4">
      <h2 id="categoriesTitle" className="text-2xl font-bold mb-4 dark:text-white">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="neumorphic p-4 text-center category-btn" onClick={() => setCurrentCategory('fruits')}>
          <FontAwesomeIcon icon={faAppleAlt} className="category-icon text-red-500" />
          <p className="dark:text-white">Fruits & Vegetables</p>
        </div>
        <div className="neumorphic p-4 text-center category-btn" onClick={() => setCurrentCategory('bakery')}>
          <FontAwesomeIcon icon={faBreadSlice} className="category-icon text-yellow-500" />
          <p className="dark:text-white">Bakery</p>
        </div>
        <div className="neumorphic p-4 text-center category-btn" onClick={() => setCurrentCategory('dairy')}>
          <FontAwesomeIcon icon={faCheese} className="category-icon text-yellow-200" />
          <p className="dark:text-white">Dairy & Eggs</p>
        </div>
        <div className="neumorphic p-4 text-center category-btn" onClick={() => setCurrentCategory('meat')}>
          <FontAwesomeIcon icon={faDrumstickBite} className="category-icon text-red-700" />
          <p className="dark:text-white">Meat & Seafood</p>
        </div>
      </div>
    </section>
  );

  const ProductList = () => (
    <section aria-labelledby="catalogueTitle" className="mb-8 p-4">
      <h2 id="catalogueTitle" className="text-2xl font-bold mb-4 dark:text-white">Our Products</h2>
      <div id="productList" className="catalogue grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" role="list">
        {products.map(product => (
          <div key={product.id} className="product neumorphic p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="font-bold mb-2">{product.name}</h3>
            <p className="mb-2">${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );

  const CartModal = () => (
    <div id="cartModal" className="cart-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden" role="dialog" aria-labelledby="cartModalTitle">
      <div className="cart-modal-content neumorphic p-6 rounded-lg max-w-md w-full">
        <h2 id="cartModalTitle" className="text-2xl font-bold mb-4 dark:text-white">Your Cart</h2>
        <ul id="cartItems" className="mb-4 dark:text-white">
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
              <button onClick={() => removeFromCart(item.id)} className="ml-2 text-red-500">Remove</button>
            </li>
          ))}
        </ul>
        <p className="dark:text-white">Total: ${calculateTotal()}</p>
        <div className="flex justify-between mt-4">
          <button id="checkoutBtn" className="bg-green-500 text-white px-4 py-2 rounded neumorphic">
            <FontAwesomeIcon icon="check" className="mr-2" />Checkout
          </button>
          <button id="closeCartBtn" className="bg-red-500 text-white px-4 py-2 rounded neumorphic">
            <FontAwesomeIcon icon="times" className="mr-2" />Close Cart
          </button>
        </div>
      </div>
    </div>
  );

  const DiscountedProducts = () => (
    <section aria-labelledby="discounted-products-heading" className="mb-12">
      <h2 id="discounted-products-heading" className="text-3xl font-bold mb-6 text-center">Discounted Products</h2>
      <div className="products-slider flex space-x-6 px-4 py-2 neumorphic">
        <div className="products-card neumorphic p-4 floating">
          <img src="https://picsum.photos/300/200?random=1" alt="Smart Watch" className="w-full h-40 object-cover mb-4 rounded" />
          <h3 className="font-semibold mb-2">Smart Watch</h3>
          <p className="mb-2"><span className="discount-badge">20% OFF</span></p>
          <p className="font-bold">$79.99 <span className="original-price">$99.99</span></p>
        </div>
        <div className="products-card neumorphic p-4 floating">
          <img src="https://picsum.photos/300/200?random=2" alt="Wireless Earbuds" className="w-full h-40 object-cover mb-4 rounded" />
          <h3 className="font-semibold mb-2">Wireless Earbuds</h3>
          <p className="mb-2"><span className="discount-badge">15% OFF</span></p>
          <p className="font-bold">$84.99 <span className="original-price">$99.99</span></p>
        </div>
        <div className="products-card neumorphic p-4 floating">
          <img src="https://picsum.photos/300/200?random=3" alt="Portable Charger" className="w-full h-40 object-cover mb-4 rounded" />
          <h3 className="font-semibold mb-2">Portable Charger</h3>
          <p className="mb-2"><span className="discount-badge">25% OFF</span></p>
          <p className="font-bold">$29.99 <span className="original-price">$39.99</span></p>
        </div>
        <div className="products-card neumorphic p-4 floating">
          <img src="https://picsum.photos/300/200?random=4" alt="Bluetooth Speaker" className="w-full h-40 object-cover mb-4 rounded" />
          <h3 className="font-semibold mb-2">Bluetooth Speaker</h3>
          <p className="mb-2"><span className="discount-badge">30% OFF</span></p>
          <p className="font-bold">$69.99 <span className="original-price">$99.99</span></p>
        </div>
        <div className="products-card neumorphic p-4 floating">
          <img src="https://picsum.photos/300/200?random=5" alt="Fitness Tracker" className="w-full h-40 object-cover mb-4 rounded" />
          <h3 className="font-semibold mb-2">Fitness Tracker</h3>
          <p className="mb-2"><span className="discount-badge">10% OFF</span></p>
          <p className="font-bold">$89.99 <span className="original-price">$99.99</span></p>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 AlxMart - All Rights Reserved</p>
      <p>This is my final project for Alx cohort 19 Alxswe Program</p>
    </footer>
  );

  return (
    <div id="app" className={`bg-gray-100 ${darkMode ? 'dark-mode' : ''} transition-colors duration-300`}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <Hero />
      <Categories />
      <ProductList />
      <CartModal />
      <main id="main-content">
        <DiscountedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default App;
