import React from "react";


const CartItem = () => {


    return (
        <div className="cart-item">
            <button type="button">Delete</button>
            {/* <img></img> */}
            <span>product title</span>
            <div>
                <button type="button">-</button>
                <span className="quantity">0</span>
                <button type="button">+</button>
            </div>
            <span>{`$ price of item`}</span>
        </div>
    )
}

export default CartItem
