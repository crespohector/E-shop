import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from '../../store/product';

import Productoftheday from "./productOfTheDay";
import "./Splash.css"

const Splash = () => {
    const dispatch = useDispatch();
    const stateProducts = useSelector((state) => state.products)
    const productsArr = Object.values(stateProducts);
    const [featureItem, setFeatureItem] = useState("");
    // console.log('products: ', products)
    // console.log('feature: ', featureItem)

    useEffect(async () => {
        let data = await dispatch(fetchAllProducts());
        setFeatureItem(() => data[Math.floor(Math.random() * 19)])
        
        const intervalId = setInterval(() => {
            setFeatureItem(() => data[Math.floor(Math.random() * 19)]);
        }, 8000)

        return () => clearInterval(intervalId);
    }, [dispatch])

    return (
        <div>
            <h1>Hello world!</h1>
            <Productoftheday item={featureItem} />
        </div>
    )
}

export default Splash;
