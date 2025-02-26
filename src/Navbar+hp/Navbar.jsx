import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div id="navbar">
        <div id="imgs">
          <div id="img"></div>
            <p></p> 
        </div>
        <div id="list">
          <ul>
            <li><Link to='/'>home</Link> </li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#full">About</a></li>
            <li><a href="#map">Location</a></li>
            <li><a href="#footer">Contact</a></li>
            {/* <li><a href="#link">Cart</a></li> */}
            {/* <Link to='/cart'>cart</Link> */}
          </ul>
        </div>
      </div>
      <div id="homepage">Indian cuisine</div>
    </>
  );
}

export default Navbar;
