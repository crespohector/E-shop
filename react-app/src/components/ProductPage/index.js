import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../../store/product";
import {totalPriceContext} from "../../context/TotalPriceContext";

import "./ProductPage.css";

const ProductPage = () => {
    const {totalPrice, setTotalPrice} = useContext(totalPriceContext);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = useSelector((state) => state.products[productId])

    const AddtoCart = () => {
        let items = localStorage.getItem('items');
        if (items === null) {
            localStorage.setItem('items', `${productId}`)
            setTotalPrice((totalPrice) => totalPrice + product.price);
            return ;
        }
        if (items.includes(productId)) {
            setError("This item is already added to cart.")
            return ;
        }
        items += `,${productId}`
        localStorage.setItem('items', items);

        //add price to the total state variable
        setTotalPrice((totalPrice) => totalPrice + product.price);
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
