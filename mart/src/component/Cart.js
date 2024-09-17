import React from 'react';

const Cart = ({ cart, total, toggleCart, checkout }) => {
  return (
    <div id="cartModal" className="cart-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" role="dialog" aria-hidden="true" aria-labelledby="cartModalTitle">
      <div className="cart-modal-content neumorphic p-6 rounded-lg max-w-md w-full">
        <h2 id="cartModalTitle" className="text-2xl font-bold mb-4">Your Cart</h2>
        <ul className="mb-4">
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
          ))}
        </ul>
        <p>Total: ${total.toFixed(2)}</p>
        <div className="flex justify-between mt-4">
          <button onClick={checkout} className="bg-green-500 text-white px-4 py-2 rounded neumorphic">
            <i className="fas fa-check mr-2"></i>Checkout
          </button>
          <button onClick={toggleCart} className="bg-red-500 text-white px-4 py-2 rounded neumorphic">
            <i className="fas fa-times mr-2"></i>Close Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
