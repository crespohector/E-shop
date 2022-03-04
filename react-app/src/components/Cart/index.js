import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { fetchAllProducts } from "../../store/product";
import { totalPriceContext } from "../../context/TotalPriceContext";

import "./Cart.css";

const ShoppingCart = () => {
    const { totalPrice, setTotalPrice } = useContext(totalPriceContext)
    const dispatch = useDispatch();
    const [effect, setEffect] = useState(false);
    const products = useSelector((state) => Object.values(state.products));
    const itemsInLocalStorage = localStorage.getItem('items')?.split(',');
    const cartItems = [];

    if (itemsInLocalStorage) {
        for (let item of itemsInLocalStorage) {
            for (let product of products) {
                if (item == product.id) {
                    cartItems.push(product);
                }
            }
        }
    }

    const checkout = () => {
        localStorage.setItem('items', "")
        window.location.reload()
    }

    useEffect(() => {
        dispatch(fetchAllProducts());
        setEffect(false);
    }, [effect])

    return (
        <div className="shopping-bag">
            <h1>Shopping Bag</h1>
            {cartItems.map(item => <CartItem key={item.id} product={item} payload={{ effect, setEffect }} />)}
            <div className="total-price-container">
                <span className="shopping-bag__total">{`Total $${totalPrice}`}</span>
                <button onClick={checkout} type="button">Checkout</button>
            </div>
        </div>
    )
}



export default ShoppingCart
