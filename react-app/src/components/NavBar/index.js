import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import eShopImg from "../../images/eShopImg.png"
import "./NavBar.css"

const NavBar = () => {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const products = useSelector(state => state.products);
  const productsArr = Object.values(products);

  const redirectToHomePage = () => {
    history.push('/')
  }

  // console.log('products: ', productsArr)
  // console.log('search: ', search)

  return (
    <div className="main-container">
      <nav className="user-navbar">

        <div className="user-navbar__div-search">
          <input className="search-input" type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
          <i className="fas fa-search"></i>
          {search.length > 0 && <div className='search-filter-container'>
            {productsArr.filter(product => product.title.toLowerCase().includes(search)).map(product => (
              // <div>{product.title}</div>
              <NavLink key={product.id} className='search-filter-container__link' to={`products/category/${product.id}`}>{product.title}</NavLink>
            ))}
          </div>}
        </div>

        <NavLink to="/">
          <img className="logo_img" src={eShopImg} alt="EShopImage" />
        </NavLink>

        <div className="user">
          <div className="user__icons">
            <i className="far fa-user"></i>
            <NavLink className="cart_link" to="/cart" exact={true}><i className="fas fa-shopping-cart"></i></NavLink>
          </div>
        </div>
      </nav>

      <div className="categories">
        <NavLink className="categories__department-link" to="/categories/women" exact={true}>Women</NavLink>
        <NavLink className="categories__department-link" to="/categories/men">Men</NavLink>
        <NavLink className="categories__department-link" to="/categories/jewelery">Jewelery</NavLink>
        <NavLink className="categories__department-link" to="/categories/electronics">Electronics</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
