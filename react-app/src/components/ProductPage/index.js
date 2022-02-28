import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../../store/product";


const ProductPage = () => {
    const dispatch = useDispatch();
    const {productId} = useParams();
    const product = useSelector((state) => state.products[productId])

    useEffect(() => {
        dispatch(fetchOneProduct(productId))
    }, [])

    return (
        <div className="product-info">
            <img className="product-info__img" src={product?.image} alt={product?.title} />
            <span className="product-info__title">{product?.title}</span>
            <span className="product-info__category">{product?.title}</span>
            <span className="product-info__description">{product?.title}</span>

        </div>
    )
}



export default ProductPage
