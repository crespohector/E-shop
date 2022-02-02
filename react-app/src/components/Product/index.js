import React from "react";
import { NavLink } from "react-router-dom";
import "./product.css";

const Product = ({ product }) => {

    return (
        <div className="product">
            <span className="product__span-title">{product.title}</span>
            <NavLink to={`/products/${product.id}`}>
                <img className="product__img" src={product.image} alt={product.title} />
            </NavLink>
        </div>
    )
}

export default Product
