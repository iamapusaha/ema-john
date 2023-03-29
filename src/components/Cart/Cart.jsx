import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart)
    return (
        <div className='cart'>
            <h2>order summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price:</p>
            <p>Total Shipping Charge:</p>
            <p>Tax: </p>
            <h3>Grand Total:</h3>
        </div>
    );
};

export default Cart;