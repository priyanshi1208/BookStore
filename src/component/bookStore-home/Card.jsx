import React, {useState } from 'react';


function Card (props) {
    const[text,setText] = useState("Add To Bag");
    const[wishlistButton, setWishlistButton] = useState(true);
    const{changeNumber} = props;


    const handleStateChange = (bookId,bookName,authorName,price,imgsrc) => {
        let userId = localStorage.getItem("userId");
        if(userId){
            let cartDetails=[];
            if(localStorage.getItem('cartDetails')){
                cartDetails=JSON.parse(localStorage.getItem('cartDetails'));
            }
            cartDetails.push({'bookId':bookId,'bookName':bookName,'authorName':authorName,'price':price,'imgsrc':imgsrc})
            localStorage.setItem('cartDetails',JSON.stringify(cartDetails))
            localStorage.setItem("number",cartDetails.length)
            changeNumber();
            setText("Added To Bag");
            setWishlistButton(false);
        }
        else{
            window.location.replace('/login')
        }
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
                    <button className='button-cart' onClick = {() => handleStateChange(props.bookId,props.bookName,props.authorName,props.price,props.imgsrc)}>{text}</button>
                    {wishlistButton && <button className='button-wishlist'>Wishlist</button>}
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Card;