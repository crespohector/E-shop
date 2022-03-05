import React, { useState, useContext } from "react";
import {totalPriceContext} from "../../context/TotalPriceContext";

//Destructure props
//Key into product which the value will be an object
const CartItem = ({product, payload}) => {
    const { totalPrice, setTotalPrice } = useContext(totalPriceContext)
    const [amount, setAmount] = useState(1);

    //remove item in shopping cart
    const removeItem = () => {

        const itemsArr = JSON.parse(localStorage.getItem('items'));
        let itemIdx;

        itemsArr.forEach((item, idx) => {
            if (item.id == product.id) {
                itemIdx = idx;
                return ;
            }
        })

        itemsArr.splice(itemIdx, 1);

        localStorage.setItem('items', JSON.stringify(itemsArr));

        setTotalPrice((totalPrice) => totalPrice - product.price);

        payload.setEffect(true)
    }

    //Decrease amount
    const decreaseAmt = () => {
        //if its 0 then do nothing that's why we have the delete button there
        if (amount <= 1) {
            let itemsArr = localStorage.getItem('items').split(',');
            itemsArr.forEach((item, idx) => {
                if (item == product.id) {
                    itemsArr.splice(idx, 1)
                }
            })
            localStorage.setItem('items', itemsArr.join(','))

            setTotalPrice((totalPrice) => totalPrice - product.price);

            payload.setEffect(true)
        }

        if (amount > 1) {
            setAmount((amount) => amount - 1)
            setTotalPrice((totalPrice) => totalPrice - product.price);
        }
    }

     //increase amount
     const increaseAmt = () => {
        setAmount((amount) => amount + 1)
        setTotalPrice((totalPrice) => totalPrice + product.price);
    }

    return (
        <div className="cart-item">
            <button onClick={removeItem} className="cart-item__button" type="button">Delete</button>
            <img className="cart-item__img" src={product.image} alt="product image"/>
            <span className="cart-item__span">{product.title}</span>
            <div>
                <button onClick={decreaseAmt} type="button">-</button>
                <span className="quantity">{amount}</span>
                <button onClick={increaseAmt} type="button">+</button>
            </div>
            <span className="cart-item__price-span">{`$${product.price * amount}`}</span>
        </div>
    )
}

export default CartItem
