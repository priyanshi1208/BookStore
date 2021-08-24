
import './NavigationBar.scss';
import logo from '../../images/education.svg';
import search from '../../images/search.png';
import cart from '../../images/supermarket.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import StoreService from '../../service/StoreService';

function NavigationBar(props){  

    const[userName,setUserName] = useState('');
    const[logoutText,setLogout] = useState('')

    useEffect(() => {
        new StoreService().getUserById(localStorage.getItem("userId"))
        .then(responseDTO => {
           let responseData = responseDTO.data;
           setUserName(responseData.data.name);
           setLogout("Logout")
       }).catch(error => {
           console.log("Error while Fetching Data"+JSON.stringify(error));
        })
    },[])
    
    const handleCartClick = () => {
        let id = localStorage.getItem("userId");
        if(id){
            window.location.replace("/cart")
        }
        else{
            window.alert("Please Login First")
        }
    }

    const logout = () => {
        localStorage.removeItem("userId")
        localStorage.removeItem("number");
        localStorage.removeItem("bookId");
        localStorage.removeItem("cartDetails");
        window.location.replace("/")
    }
    
    return(
            <nav className="navigation-bar">
            <div className="bookstore-nav">
                <Link to = "/" className="bookstore-img" >
                   <img src={logo} alt="logo"></img>
                </Link>
                <div className="bookstore-text">Bookstore</div>
            </div>
            <div className="search-bar">
                <img className="search-img" src={search} alt="search"></img>
                <input type="text" className="search-input" placeholder="Search..."/>
            </div>
            <div className="cart-nav">
                <p className="cart-txt">Cart</p>
                <img className="cart-img" src={cart} alt="cart" onClick={handleCartClick} ></img>
                <p className="cart-number">{props.cartNumber}</p>
            </div>  
            <p className="user-name" onClick={logout}>{userName}</p>
            <span className="logout-box">
                <div className="logout">{logoutText}</div>
            </span>
        </nav>
    )
}
export default NavigationBar;