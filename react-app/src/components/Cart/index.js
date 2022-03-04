import React, { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { fetchAllProducts } from "../../store/product";
import { totalPriceContext } from "../../context/TotalPriceContext";

import "./Cart.css";

const ShoppingCart = () => {
    const { totalPrice, setTotalPrice } = useContext(totalPriceContext)
    const dispatch = useDispatch();
    const [effect, setEffect] = useState(false);
    const productsInLocalStorage = localStorage.getItem("items");

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
            { productsInLocalStorage !== null ? JSON.parse(productsInLocalStorage).map(product => (
              <CartItem key={product.id} product={product} payload={{effect, setEffect}} />
            )) : null}
            <div className="total-price-container">
                <span className="shopping-bag__total">{`Total $${totalPrice}`}</span>
                <button onClick={checkout} type="button">Checkout</button>
            </div>
        </div>
    )
}



export default ShoppingCart
