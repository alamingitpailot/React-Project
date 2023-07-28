import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const newCarts = [...cart, product];
        setCart(newCarts);
        addToDb(product.id);
    }

    return (
        <div className='shop-product'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} handleAddToCart={handleAddToCart} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}
export default Shop;