// src/components/ProductCard/ProductCard.js
import React from 'react';
import './ProductCard.css'; // Import the CSS file

const ProductCard = ({productName, quantity}) => {
  return (
    <div>
            <div className="product-card">
                <h3>{productName}</h3>
                <p>Description of the product.</p>
                <p className="price">Price: $99.99</p>
                <p>Quantity {quantity}</p>
                <p className={quantity < 5 ? "limited-stock" : "buy-now"}>
                    {quantity < 5 ? "Limited stock" : "Available buy now"}
                </p>
            </div>
    </div>
  );
};

export default ProductCard;
