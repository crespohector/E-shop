import React, { useState } from "react";
import {itemInCartContext} from "../../index";

//Destructure props
//Key into product which the value will be an object
const CartItem = ({product, payload}) => {
    const [amount, setAmount] = useState(1);

    //remove item in shopping cart
    const removeItem = (productId) => () => {
        let itemsArr = localStorage.getItem('items').split(',');
        itemsArr.forEach((item, idx) => {
            if (item == productId) {
                itemsArr.splice(idx, 1)
            }
        })
        localStorage.setItem('items', itemsArr.join(','))
        payload.setEffect(true)
    }

    //Decrease amount
    const decreaseAmt = () => {
        if (amount > 0) {
            setAmount((amount) => amount - 1)
        }
    }

     //increase amount
     const increaseAmt = () => {
        setAmount((amount) => amount + 1)
    }

    return (
        <div className="cart-item">
            <button onClick={removeItem(product.id)} className="cart-item__button" type="button">Delete</button>
            <img className="cart-item__img" src={product.image} alt="product image"/>
            <span className="cart-item__span">{product.title}</span>
            <div>
                <button onClick={decreaseAmt} type="button">-</button>
                <span className="quantity">{amount}</span>
                <button onClick={increaseAmt} type="button">+</button>
            </div>
            <span className="cart-item__price-span">{`$${product.price}`}</span>
        </div>
    )
}

export default CartItem
