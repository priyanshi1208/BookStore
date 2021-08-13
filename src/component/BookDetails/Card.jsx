import React, { useState } from 'react';


function Card (props) {

    const[cartItem,setCartItem] = useState('');

    const setCart = () => {
        setCartItem(1);
    }

    return(
        <div className='cards'>
            <div className='card'>
                <img src = {props.imgsrc} alt='loading..' className='card_img'/>
                <div className='card_info'>
                    <h3 className='card_title'>{props.bookName}</h3>
                    <span className='card_category'>{props.authorName}</span>
                    <h4 className='card_price'> ₹ {props.price}</h4>
                    <div className='button'>
                    <button className='button-cart' onClick = {setCart}>Add To Cart</button>
                    <button className='button-wishlist'>Wishlist</button>
                    </div>
                </div>
            </div>

        </div>
    );

}
export default Card;