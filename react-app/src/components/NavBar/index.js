import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import eShopImg from "../../images/eShopImg.png"
import "./NavBar.css"

const NavBar = () => {
  const [search, setSearch] = useState('');

  return (
    <nav className="main_wrapper">
      <div className="first_wrapper">

        <div className="wrapper-search">
          <div className="search-container">
            <input className="search-input" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
            <i className="fas fa-search"></i>
          </div>
        </div>

        <img className="wrapper-logo_img" src={eShopImg} alt="EShopImage" />

        <div className="wrapper-user">
          <div className="user-icons">
            <i className="far fa-user"></i>
            <i className="fas fa-shopping-cart"></i>
          </div>
        </div>
      </div>

      <div className="second_wrapper">
          <button type="button">Women</button>
          <button type="button">Men</button>
          <button type="button">Jewelery</button>
          <button type="button">Electronics</button>
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
    </nav>
  );
}

export default NavBar;
