import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../../store/product";

import "./ProductPage.css";

const ProductPage = () => {
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = useSelector((state) => state.products[productId])

    const AddtoCart = () => {
        let items = localStorage.getItem('items');
        if (items === null) {
            localStorage.setItem('items', `${productId}`)
            return ;
        }
        if (items.includes(productId)) {
            setError("This item is already added to cart.")
            return ;
        }
        items += `,${productId}`
        localStorage.setItem('items', items);
    }

    useEffect(() => {
        dispatch(fetchOneProduct(productId))
    }, [dispatch])

    return (
        <div className="product-info">
            <img className="product-info__img" src={product?.image} alt={product?.title} />
            <span className="product-info__title">{product?.title}</span>
            <span className="product-info__category">Category: {product?.category}</span>
            <span className="product-info__description">Description: {product?.description}</span>
            <span className="product-info__price">${product?.price}</span>
            {error.length > 0 ? <span className="product-info__error">{error}</span> : null}
            <button onClick={AddtoCart} className="product-info__add-to-cart" type="button">Add to cart</button>
        </div>
    )
}



export default ProductPage
