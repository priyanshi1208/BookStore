import React, {useState } from 'react';


function Card (props) {
    const[text,setText] = useState("Add To Bag");
    const[wishlistButton, setWishlistButton] = useState(true);
    const{changeNumber} = props;


    const handleStateChange = () => {
        localStorage.setItem("number",1);
        changeNumber();
        setText("Added To Bag");
        setWishlistButton(false);
    }

    return(
        <div className='cards'>
            <div className='card'>
                <img src = {props.imgsrc} alt='loading..' className='card_img'/>
                <div className='card_info'>
                    <p className='card_title'>{props.bookName}</p>
                    <span className='card_category'>by {props.authorName}</span>
                    <p className='card_price'> Rs. {props.price}</p>
                    <div className='button'>
                    <button className='button-cart' onClick = {handleStateChange}>{text}</button>
                    {wishlistButton && <button className='button-wishlist'>Wishlist</button>}
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Card;