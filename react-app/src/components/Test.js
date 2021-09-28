import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
// import {fetchAllProducts, fetchOneProduct} from '../store/product';
import {fetchAllOrders, fetchOneOrder, createOrder} from '../store/order';

const Test = () => {
    const dispatch = useDispatch();
    let orderProducts = {userId: 1, products: [{productId: 1, quantity: 2}, {productId: 2, quantity: 1}, {productId: 3, quantity: 4}]}

    //invoke useDispatch in the useEffect hook and dispatch the thunk action with the correct data
    useEffect(() => {
        // dispatch(fetchAllProducts())
        // dispatch(fetchOneProduct(1))
        // dispatch(fetchAllOrders(1))
        // dispatch(fetchOneOrder(1))
        // dispatch(createOrder(orderProducts))
    }, [dispatch])

    return (
        <>
            <h1>Hello world!</h1>
        </>
    )
}


export default Test;
