// src/components/ProductCard/ProductPage.js

import React from 'react';
import ProductCard from './ProductCard';

const ProductPage = () => {
    return (
        <div>
            <h2>Product Card</h2>

            <h3>Scenario</h3>
            <p>
                Setting text based on parameter "quantity" passed through to the component.
            </p>

            <h3>Info</h3>
            <p>
                In this scenario, we have a quantity parameter passed through to our ProductCard component. We then evaluate the quantity and set both style and text depending on the value, using a ternary operator.
            </p>

            <h3>Testing</h3>
            <p>
                To test this, change the quantity value in App.js - <br />
                <i style={{color: 'blue'}}>
                    {'<ProductCard quantity={2} /><ProductCard quantity={10} />'}
                </i>
            </p>

            {/* Render multiple ProductCards with different quantities */}
            <ProductCard productName="Jumpers" quantity={2} />
            <ProductCard productName="Trousers" quantity={10} />
        </div>
    );
};

export default ProductPage;
