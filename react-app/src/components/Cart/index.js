import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { fetchAllProducts } from "../../store/product";
import "./Cart.css";
import {itemInCartContext} from "../../index";

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const [effect, setEffect] = useState(false);
    console.log('THIS IS EFFECT: ', effect)
    const [total, setTotal] = useState(0);
    const products = useSelector((state) => Object.values(state.products));
    const itemsInLocalStorage = localStorage.getItem('items').split(',');
    const cartItems = [];
    for (let item of itemsInLocalStorage) {
        for (let product of products) {
            if (item == product.id) {
                cartItems.push(product);
            }
        }
    }

    useEffect(() => {
        dispatch(fetchAllProducts());
        setEffect(false);
    }, [effect])

    return (
        <div className="shopping-bag">
            <h1>Shopping Bag</h1>
            {cartItems.map(item => <CartItem key={item.id} product={item} payload={{effect, setEffect}}/>)}
            <div className="total-price-container">
                <span className="shopping-bag__total">{`Total $${total}`}</span>
                <button type="button">Checkout</button>
            </div>
        </div>
    )
}



export default ShoppingCart
