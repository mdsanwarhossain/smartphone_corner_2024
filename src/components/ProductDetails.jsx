import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  // Access the parameters from the URL
  const { id } = useParams();
 

  // Here you would fetch the product details based on the id
  // For this example, I'll just display the id
  return (
    <div>
      <h2>Product Details:</h2>
      <p>Product ID: {id}</p>
      {/* Add more details about the product */}
    </div>
  );
}

export default ProductDetails;
