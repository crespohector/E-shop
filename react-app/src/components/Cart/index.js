import React, { useState } from "react";
import CartItem from "./CartItem";


const ShoppingCart = () => {
    const [total, setTotal] = useState(0);
    console.log('local storage: ', localStorage.getItem('items'))

    return (
        <div className="shopping-bag">
            <p className="shopping-bag__title">Shopping Bag</p>
            {/* <CartItem/> render each cart item from user */}
            <span className="shopping-bag__total">{`Total $${total}`}</span>
            <button type="button">Checkout</button>
        </div>
    )
}



export default ShoppingCart
