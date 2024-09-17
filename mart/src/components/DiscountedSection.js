import React from 'react';

function DiscountedSection() {
  const discountedProducts = [
    { name: "Organic Carrots", originalPrice: 1.50, discountedPrice: 1.00, image: "https://picsum.photos/300/200?random=7" },
    { name: "Avocados (5 Pack)", originalPrice: 4.00, discountedPrice: 3.00, image: "https://picsum.photos/300/200?random=8" },
    { name: "Peanut Butter", originalPrice: 5.50, discountedPrice: 4.20, image: "https://picsum.photos/300/200?random=9" }
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Discounted Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {discountedProducts.map((product, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-red-500 font-bold">${product.discountedPrice.toFixed(2)}</span>
                <span className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DiscountedSection;
