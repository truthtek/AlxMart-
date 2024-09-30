import React from 'react';

function Categories() {
  return (
    <section aria-labelledby="categoriesTitle" className="mb-8 p-4">
      <h2 id="categoriesTitle" className="text-2xl font-bold mb-4">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="neumorphic p-4 text-center">
          <i className="fas fa-apple-alt category-icon"></i>
          <p>Fruits & Vegetables</p>
        </div>
        <div className="neumorphic p-4 text-center">
          <i className="fas fa-bread-slice category-icon"></i>
          <p>Bakery</p>
        </div>
        <div className="neumorphic p-4 text-center">
          <i className="fas fa-cheese category-icon"></i>
          <p>Dairy & Eggs</p>
        </div>
        <div className="neumorphic p-4 text-center">
          <i className="fas fa-drumstick-bite category-icon"></i>
          <p>Meat & Seafood</p>
        </div>
      </div>
    </section>
  );
}

export default Categories;
