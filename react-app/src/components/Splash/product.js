import React  from "react";
import { useHistory } from "react-router-dom";

const Product = ({item}) => {

    const history = useHistory();
    const handleClick = () => {
        history.push(`products/category/${item.id}`)
    }

    //implementing BEM (block__element--modifier) conventions
    return (
        <div className="product">
            <span className="product__span-title">{item.title}</span>
            <img onClick={handleClick} className="product__img" src={item.image} alt={item.title} />
        </div>
    )
}

export default Product
