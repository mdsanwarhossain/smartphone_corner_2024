import React from "react";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      {" "}
      {ProductDetails}
     
      <div className="bg-white p-4 border border-gray-200 rounded-lg m-auto object-center shadow-lg relative  hover: shadow-indigo-500/40 ml-7 mr-7 my-5 pt-8">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-auto mb-2 mx-auto h-40 rounded-lg"
        />
        <h3 className="font-semibold text-lg text-center">{product.title}</h3>
        <div className="container w-60 h-13 overflow-hidden">
          <p className="first-description text-sm text-gray-700 truncate">
            {product.description}
          </p>
        </div>

        <p className="text-blue-500 font-semibold">${product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Brand: {product.brand}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
