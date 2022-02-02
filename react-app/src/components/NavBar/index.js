import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import eShopImg from "../../images/eShopImg.png"
import "./NavBar.css"

const NavBar = () => {
  const [search, setSearch] = useState('');
  const products = useSelector(state => state.products);
  const productsArr = Object.values(products);

  console.log('products: ', productsArr)
  console.log('search: ', search)

  return (
    <nav className="navbar">

      <div className="search-bar">
        <input className="search-bar__input" type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
        <i className="fas fa-search"></i>
        {search.length > 0 && <div className='search-bar__results-container'>
          {productsArr.filter(product => product.title.toLowerCase().includes(search)).map(product => (
            // {"Please Note that in the NavLink, if we remove the first slash '/' in the to attribute. What will happen is, if the
            // user keeps on clicking a the navlink in the results container, if will keep appending the same url. Thus, making it looks extremly buggy.
            // Solution: the first slash must be included. Becasue the navlink has to match the same route as specified."}
            <NavLink key={product.id} className='search-filter-container__link' to={`/products/${product.id}`}>{product.title}</NavLink>
          ))}
        </div>}
      </div>

      <NavLink to="/">
        <img className="logo-img" src={eShopImg} alt="EShopImage" />
      </NavLink>

      <div className="user">
        <div className="user__icons">
          <i className="far fa-user"></i>
          <NavLink className="cart_link" to="/cart" exact={true}><i className="fas fa-shopping-cart"></i></NavLink>
        </div>
      </div>

    </nav>
  );
}

export default NavBar;
