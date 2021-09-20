import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'

// import {fetchAllProducts, fetchOneProduct} from '../store/product';
import {fetchAllOrders, fetchOneOrder, createOrder} from '../store/order';


const Test = () => {
    const dispatch = useDispatch();

    //invoke useDispatch in the useEffect hook and dispatch the thunk action with the correct data
    useEffect(() => {
        // dispatch(fetchAllProducts())
        // dispatch(fetchOneProduct(1))
        // dispatch(fetchAllOrders(1))
        // dispatch(fetchOneOrder(1))
        // dispatch(createOrder(1))
    }, [dispatch])

    return (
        <>
            <h1>Hello world!</h1>
        </>
    )
}


export default Test;
