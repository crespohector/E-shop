import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from '../../store/product';

import Product from "./product";
import "./Splash.css"

const Splash = () => {
    const dispatch = useDispatch();
    const stateProducts = useSelector((state) => state.products)
    const productsArr = Object.values(stateProducts);
    const [featureItem, setFeatureItem] = useState("");
    console.log('feature: ', productsArr)

    useEffect(async () => {
        let data = await dispatch(fetchAllProducts());
        setFeatureItem(() => data[Math.floor(Math.random() * (data.length - 1))])
        const intervalId = setInterval(() => {
            setFeatureItem(() => data[Math.floor(Math.random() * (data.length - 1))]);
        }, 3000)

        return () => clearInterval(intervalId);
    }, [dispatch])

    return (
        <div>
            <div className="feature-product">
                <span className="feature-product__span">Featured product of the day</span>
                <Product item={featureItem} />
            </div>
            <div className="category">
                <span className="category__span">Women's Clothing</span>
                <div className="category__div-products">
                    {productsArr.filter(product => product.category === "women's clothing").map(product => (
                        <Product key={product.id} item={product} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Splash;
