import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { fetchAllProducts } from '../../store/product';

import Product from "../Product";
import "./Splash.css"

const Splash = () => {
    const dispatch = useDispatch();
    const stateProducts = useSelector((state) => state.products)
    const productsArr = Object.values(stateProducts);
    const [featureItem, setFeatureItem] = useState("");

    useEffect(() => {
        let data;
        async function fetchProduct() {
            data = await dispatch(fetchAllProducts());
            setFeatureItem(() => data[Math.floor(Math.random() * (data.length - 1))])
        }
        fetchProduct();
        const intervalId = setInterval(() => {
            setFeatureItem(() => data[Math.floor(Math.random() * (data.length - 1))]);
        }, 5000)

        return () => clearInterval(intervalId);
    }, [dispatch])

    return (
        <>
            <div className="categories">
                <NavLink className="categories__department-link" to="/categories/women" exact={true}>Women</NavLink>
                <NavLink className="categories__department-link" to="/categories/men">Men</NavLink>
                <NavLink className="categories__department-link" to="/categories/jewelery">Jewelery</NavLink>
                <NavLink className="categories__department-link" to="/categories/electronics">Electronics</NavLink>
            </div>

            <div className="feature-product">
                <span className="feature-product__span">Featured product of the day</span>
                <Product product={featureItem} />
            </div>
            
            <div className="category" id="style-2">
                <span className="category__span">Women's Clothing</span>
                <div className="category__div-products">
                    {productsArr.filter(product => product.category === "women's clothing").map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <div className="category" id="style-2">
                <span className="category__span">Men's Clothing</span>
                <div className="category__div-products">
                    {productsArr.filter(product => product.category === "men's clothing").map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <div className="category" id="style-2">
                <span className="category__span">Jewelery</span>
                <div className="category__div-products">
                    {productsArr.filter(product => product.category === "jewelery").map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <div className="category" id="style-2">
                <span className="category__span">Electronics</span>
                <div className="category__div-products">
                    {productsArr.filter(product => product.category === "electronics").map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Splash;
