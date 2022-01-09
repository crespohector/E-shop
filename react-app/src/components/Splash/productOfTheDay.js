import React  from "react";

const Productoftheday = ({item}) => {
    console.log('props: ', item)
    //implementing BEM (block__element--modifier) conventions
    //TODO- add a onClick event on the img where it will redirect the user
    //to that product.
    return (
        <div className="feature-product">
            <span className="feature-product__span">Featured product of the day</span>
            <span className="feature-product__span-title">{item.title}</span>
            <img className="feature-product__img" src={item.image} alt="product of the day" />
        </div>
    )
}

export default Productoftheday
