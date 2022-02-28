import React, { useState } from "react";
import CartItem from "./CartItem";


const ShoppingCart = () => {
    //we need a list of all the current items from local storage.
    //check if user is login
    //after checking out, will create a new Order to the user.
    const [total, setTotal] = useState(0);

    return (
        <>
            <div className="shopping-bag">
                <p className="shopping-bag__title">Shopping Bag</p>
                {/* <CartItem/> render each cart item from user */}
                <span className="shopping-bag__total">{`Total $${total}`}</span>
                <button type="button">Checkout</button>
            </div>
        </>
    )
}



export default ShoppingCart
