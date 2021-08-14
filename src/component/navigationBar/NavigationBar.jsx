import React from 'react';
import './NavigationBar.scss';
import logo from '../../images/education.svg';
import search from '../../images/search.png';
import cart from '../../images/supermarket.svg';

function NavigationBar(props){
    return(
            <nav className="navigation-bar">
            <div className="bookstore-nav">
                <img className="bookstore-img" src={logo} alt="logo"></img>
                <div className="bookstore-text">Bookstore</div>
            </div>
            <div className="search-bar">
                <img className="search-img" src={search} alt="search"></img>
                <input type="text" className="search-input" placeholder="Search..."/>
            </div>
            <div className="cart-nav">
                <p className="cart-txt">Cart</p>
                <img className="cart-img" src={cart} alt="cart"></img>
                <p className="cart-number">{props.cartNumber}</p>
            </div>  
        </nav>
    )
}
export default NavigationBar;