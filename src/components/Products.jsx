import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';


function Products() {
  const [products, setProducts] = useState([]);
  const currentPage = 0;
  const [productSize, setSize] = useState(3);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const response = await fetch(`https://dummyjson.com/products`);
    const data = await response.json();
    setProducts(data.products);
  }

  function renderProducts() {
    const startIndex = currentPage;
    const endIndex = productSize;
    return products.slice(startIndex, endIndex).map(product => (
      <ProductCard key={product.id} product={product} />
    ));
  }


  function isBottomOfPage() {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }

  function loadMoreProducts() {
    setSize(products.length)
    renderProducts();

  }

  window.addEventListener('scroll', function () {
    if (isBottomOfPage()) {
      loadMoreProducts();
    }
  });


  return (
    
    <div id="productGrid" className="grid grid-cols-1 md:grid-cols-3 gap-4 h-1/2">
      
      {renderProducts()}
    </div>
  );
}

export default Products;