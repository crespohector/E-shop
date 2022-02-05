import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import eShopImg from "../../images/eShopImg.png"
import "./NavBar.css"

const NavBar = () => {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const [displaySearchResults, setDisplaySearchResults] = useState(false);
  const products = useSelector(state => state.products);
  const productsArr = Object.values(products);

  const onClickSearchBox = () => {
    setDisplaySearchResults(true);
  }

  const onClickResults = (e) => {
    e.preventDefault();
    if (!search.length) {
      history.push("/");
    }
    else {
      history.push("/results");
    }
  }

  useEffect(() => {
    if (!displaySearchResults) return;

    function closeDisplay(e) {
      if (e.target.parentElement === null) return;
      if (e.target.parentElement.className === "search-bar--focus") return;
      setDisplaySearchResults(false);
    }

    document.addEventListener('click', closeDisplay);

    return () => document.removeEventListener("click", closeDisplay)
  }, [displaySearchResults])


  return (
    <nav className="navbar">

      <div onClick={onClickSearchBox} className={!displaySearchResults ? "search-bar" : "search-bar--focus"}>
        <input className="search-bar__input" type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
        <i onClick={onClickResults} className="fas fa-search"></i>
        {(search.length > 0 && displaySearchResults === true) && <div className='search-bar__results-container' >
          {productsArr.filter(product => product.title.toLowerCase().includes(search)).map(product => (
            <NavLink key={product.id} className='search-bar__result-link' to={`/products/${product.id}`}>{product.title}</NavLink>
          ))}
        </div>}
      </div>

      <NavLink to="/">
        <img className="logo-img" src={eShopImg} alt="EShopImage" />
      </NavLink>

      <div className="user">
          <i className="far fa-user"></i>
          <NavLink className="cart_link" to="/cart" exact={true}><i className="fas fa-shopping-cart"></i></NavLink>
      </div>

    </nav>
  );
}

export default NavBar;
