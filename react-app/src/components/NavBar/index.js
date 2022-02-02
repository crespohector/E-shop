import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import eShopImg from "../../images/eShopImg.png"
import "./NavBar.css"

const NavBar = () => {
  const [search, setSearch] = useState('');
  const [display, setDisplay] = useState(false);
  const products = useSelector(state => state.products);
  const productsArr = Object.values(products);

  console.log('----display: ', display);

  const onClickSearchBox = () => {
    setDisplay(true);

  }

  return (
    <nav className="navbar">

      <div className={!display ? "search-bar" : "search-bar--focus"}>
        <input className="search-bar__input" type="search" value={search} onClick={onClickSearchBox} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
        <i className="fas fa-search"></i>
        {(search.length > 0 && display === true) && <div className='search-bar__results-container' >
          {productsArr.filter(product => product.title.toLowerCase().includes(search)).map(product => (
            // {"Please Note that in the NavLink, if we remove the first slash '/' in the to attribute. What will happen is, if the
            // user keeps on clicking a the navlink in the results container, if will keep appending the same url. Thus, making it looks extremly buggy.
            // Solution: the first slash must be included. Becasue the navlink has to match the same route as specified."}
            <NavLink key={product.id} className='search-bar__result-link' to={`/products/${product.id}`}>{product.title}</NavLink>
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
