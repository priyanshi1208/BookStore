
import './NavigationBar.scss';
import logo from '../../images/education.svg';
import search from '../../images/search.png';
import cart from '../../images/supermarket.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function NavigationBar(props){

    const[cartNumber,setNumber] = useState();

    useEffect(() => {
        setCart();
    })
    
    const setCart = () => {
        setNumber(localStorage.getItem("number") || 0)
    }
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
                <Link to="/cart" className="cart-img">
                <img src={cart} alt="cart"></img>
                </Link>
                <p className="cart-number">{cartNumber}</p>
            </div>  
        </nav>
    )
}
export default NavigationBar;