import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                    <h1>this is our product section</h1>
                </div>
                <div className="cart-container">
                    <h1>cart section</h1>
                </div>
            </div>
        </div>
    );
};

export default Shop;