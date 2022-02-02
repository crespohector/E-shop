import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
// import {fetchAllProducts, fetchOneProduct} from '../store/product';
import {fetchAllOrders, fetchOneOrder, createOrder} from '../store/order';
import { fetchOneProduct } from "../store/product";

const Test = () => {
    const dispatch = useDispatch();

    //invoke useDispatch in the useEffect hook and dispatch the thunk action with the correct data
    useEffect(() => {
        // console.log('MY FUNCTION from test file: ', fetchOneOrder(1)(dispatch))

        // dispatch(fetchAllProducts())
        // dispatch(fetchOneProduct(1))
        // dispatch(fetchAllOrders(1))
        // const test = dispatch(fetchOneOrder(1))
        //test returns a promise due to the cb in the dispatch function.
        //When using dispatch, the return result will depend on what the cb returns. It can be a promise.
        // console.log('------TEST: ', test)
        // dispatch(createOrder(orderProducts))
    }, [dispatch])

    return (
        <>
            <h1>Hello world!</h1>
        </>
    )
}


export default Test;
