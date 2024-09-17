import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <section aria-labelledby="catalogueTitle" className="mb-8 p-4">
      <h2 id="catalogueTitle" className="text-2xl font-bold mb-4">Our Products</h2>
      <div className="catalogue grid gap-6" role="list">
        {products.map((product, index) => (
          <div className="product neumorphic p-4 rounded-lg text-center animate__animated animate__fadeIn" role="listitem" key={index}>
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="mb-4">${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product.name, product.price)} className="bg-blue-500 text-white px-4 py-2 rounded neumorphic">
              <i className="fas fa-cart-plus mr-2"></i>Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
