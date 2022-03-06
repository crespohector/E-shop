import React, { useState, useContext, useEffect } from "react";
import { totalPriceContext } from "../../context/TotalPriceContext";

//Destructure props
//Key into product which the value will be an object
const CartItem = ({ product, payload }) => {
    const { totalPrice, setTotalPrice } = useContext(totalPriceContext)
    const [amount, setAmount] = useState(1);

    //remove item in shopping cart
    const removeItem = () => {
        const itemsArr = JSON.parse(localStorage.getItem('items'));
        let itemIdx;

        itemsArr.forEach((item, idx) => {
            if (item.id == product.id) {
                itemIdx = idx;
                return;
            }
        })

        itemsArr.splice(itemIdx, 1);

        localStorage.setItem('items', JSON.stringify(itemsArr));

        //This is how useEffect functionality works. In the dependency array, if any of the state
        //variable's value changes state then it will CAUSE a re-render. Essentially, running the
        //page again and whatever is in the cb of the useEffect hook.
        //We can prove this by change the boolean value to true or false. Initially the state variable
        //value is false when loading the function component. If at any point the user interaction changes
        //the state variable's value to true then it will cause a re-render. If we were to set instead it
        //to be false. Nothing will happen, it will NOT cause a re-render because the state variable's value
        //does not change.
        payload.setEffect(true)
    }

    //Decrease amount
    const decreaseAmt = () => {
        if (amount > 1) {
            setAmount((amount) => amount - 1)
            const itemsArr = JSON.parse(localStorage.getItem('items'));
            itemsArr.forEach((item) => {
                if (product.id == item.id) {
                    item["quantity"] = amount - 1;
                }
            })
            localStorage.setItem('items', JSON.stringify(itemsArr));
            setTotalPrice((totalPrice) => totalPrice - product.price);
        }
    }

    //increase amount
    const increaseAmt = () => {
        if (amount < 9) {
            setAmount((amount) => amount + 1)
            const itemsArr = JSON.parse(localStorage.getItem('items'));
            itemsArr.forEach((item) => {
                if (product.id == item.id) {
                    item["quantity"] = amount + 1;
                }
            })
            localStorage.setItem('items', JSON.stringify(itemsArr));
            setTotalPrice((totalPrice) => totalPrice + product.price);
        }
    }

    useEffect(() => {
        const itemsArr = JSON.parse(localStorage.getItem('items'));
        itemsArr.forEach(item => {
            if (item.id == product.id) {
                if (item["quantity"] !== undefined) {
                    setAmount(item["quantity"]);
                }
            }
        })
    }, [amount])

    return (
        <div className="cart-item">
            <button onClick={removeItem} className="cart-item__button" type="button">Delete</button>
            <img className="cart-item__img" src={product.image} alt="product image" />
            <span className="cart-item__span">{product.title}</span>
            <div>
                <button onClick={decreaseAmt} type="button" >-</button>
                <span className="quantity">{amount}</span>
                <button onClick={increaseAmt} type="button">+</button>
            </div>
            <span className="cart-item__price-span">{`$${product.price * amount}`}</span>
        </div>
    )
}

export default CartItem
