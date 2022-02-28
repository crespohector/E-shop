import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../../store/product";

import "./ProductPage.css";

const ProductPage = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = useSelector((state) => state.products[productId])

    const AddtoCart = () => {
        //add item to localstorage so it never gets delete while user refreshes page or leaves site.
        //add it to shopping cart
    }

    useEffect(() => {
        dispatch(fetchOneProduct(productId))
    }, [])

    return (
        <div className="product-info">
            <img className="product-info__img" src={product?.image} alt={product?.title} />
                <span className="product-info__title">{product?.title}</span>
                <span className="product-info__category">Category: {product?.category}</span>
                <span className="product-info__description">Description: {product?.description}</span>
                <span className="product-info__price">${product?.price}</span>
                <button onClick={AddtoCart} className="product-info__add-to-cart" type="button">Add to cart</button>
        </div>
    )
}



export default ProductPage
