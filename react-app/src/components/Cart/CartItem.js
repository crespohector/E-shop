import React from "react";
import {itemInCartContext} from "../../index";

//Destructure props
//Key into product which the value will be an object
const CartItem = ({product, payload}) => {

    console.log('payload: ', payload)

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

    return (
        <div className="cart-item">
            <button onClick={removeItem(product.id)} className="cart-item__button" type="button">Delete</button>
            <img className="cart-item__img" src={product.image} alt="product image"/>
            <span className="cart-item__span">{product.title}</span>
            <div>
                <button type="button">-</button>
                <span className="quantity">1</span>
                <button type="button">+</button>
            </div>
            <span className="cart-item__price-span">{`$${product.price}`}</span>
        </div>
    )
}

export default CartItem
