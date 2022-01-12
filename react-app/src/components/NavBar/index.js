import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import eShopImg from "../../images/eShopImg.png"
import "./NavBar.css"

const NavBar = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="main-container">
      <nav className="user-navbar">

        <div className="user-navbar__div-search">
          <div className="search-container">
            <input className="search-input" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
            <i className="fas fa-search"></i>
          </div>
        </div>

        <img className="logo_img" src={eShopImg} alt="EShopImage" />

        <div className="user">
          <div className="user__icons">
            <i className="far fa-user"></i>
            <NavLink className="cart_link" to="/cart" exact={true}><i className="fas fa-shopping-cart"></i></NavLink>
          </div>
        </div>
      </nav>

      <div className="categories">
          <NavLink className="categories__department-link" to="/women" exact={true}>Women</NavLink>
          <NavLink className="categories__department-link" to="/men">Men</NavLink>
          <NavLink className="categories__department-link" to="/jewelery">Jewelery</NavLink>
          <NavLink className="categories__department-link" to="/electronics">Electronics</NavLink>
      </div>
      {/* <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul> */}
    </div>
  );
}

export default NavBar;
