// src/components/ProductCard/ProductCard.js
import React from 'react';
import './ProductCard.css'; // Import the CSS file

const ProductCard = ({quantity}) => {
  return (
    <div>
            <h2>Product Card</h2>
            <h3>Scenario</h3>
            <p>
                Set text and the style of the text depending on a quantity value passed through to the component.
            </p>

            <h3>Info</h3>
            <p>
                In this scenario, we have a quantity parameter passed through from our App.js routing. We then evaluate the value and set both style and text depending on the value, using a tenary operator
            </p>

            <h3>Testing</h3>
            <div>
                <p>
                    To test this, change the quantity value in App.js - <br></br>
                    <i style={{ color: 'blue' }}>
                    {'<Route path="/product-card" element={<ProductCard quantity="2" />} />'}
                    </i>
                </p>
            </div>


            <div className="product-card">
                <h3>Product Name</h3>
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
