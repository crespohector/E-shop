import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from '../../store/product';

import Productoftheday from "./productOfTheDay";
import "./Splash.css"

const Splash = () => {
    //have to call react hooks in the function component or custom react hook
    const dispatch = useDispatch();
    const stateProducts = useSelector((state) => state.products)
    const productsArr = Object.values(stateProducts);
    const [featureProduct, setFeatureProduct] = useState("");
    console.log('products: ', productsArr)
    // console.log('feature: ', featureProduct)
    

    useEffect(() => {
        dispatch(fetchAllProducts());

        // const intervalId = setInterval(() => {
        //     console.log('here: ', productsArr)
        //     setFeatureProduct(() => productsArr[Math.floor(Math.random() * 19)]);
        // }, 3000)


        // return () => clearInterval(intervalId);
    }, [dispatch])

    return (
        <div>
            <h1>Hello world!</h1>
            <Productoftheday />
        </div>
    )
}

export default Splash;
