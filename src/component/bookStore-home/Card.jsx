import React, { useState } from 'react';


function Card (props) {

    const{changeNumber} = props;
    const[text,setText] = useState("Add To Cart");

    const handleStateChange = () => {
        
        changeNumber();
        setText("Added");
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
                    <button className='button-cart' onClick = {handleStateChange}>{text}</button>
                    <button className='button-wishlist'>Wishlist</button>
                    </div>
                </div>
            </div>

        </div>
    );

}
export default Card;