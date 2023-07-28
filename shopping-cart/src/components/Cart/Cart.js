

import React, { useEffect, useState } from 'react';
import './cart.css';

const Cart = ({ cart }) => {

    const [price, setPrice] = useState();
    const [shipping, setShipping] = useState();
    const [tax, setTax] = useState();
    const [grandTotal, setGrandTotal] = useState();

    useEffect(() => {
        const TotalPrice = cart.reduce((totalPrice, cart) => totalPrice + cart.price, 0);
        const totalTax = parseFloat((TotalPrice * 0.1).toFixed(2));
        const TotalShipping = cart.reduce((totalShipping, cart) => totalShipping + cart.shipping, 0);
        const grandTotalPrice = (TotalPrice + totalTax + TotalShipping).toFixed(2);

        setPrice(TotalPrice);
        setTax(totalTax);
        setShipping(TotalShipping);
        setGrandTotal(grandTotalPrice);

    }, [cart])


    return (
        <div className='cart'>
            <h1>Order Summery</h1>
            <p>Selected Items: {cart.length}</p>
            <p>Product Price: {price || 0}</p>
            <p>Total Shipping Charge: {shipping || 0}</p>
            <p>Tax: {tax || 0}</p>
            <h5>Grand Total: {grandTotal}</h5>
        </div>
    )
}
export default Cart;