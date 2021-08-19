import React from 'react';
import { useState,useEffect } from 'react';
import StoreService from '../../service/StoreService';

function OrderSummary(props){
    const[imageURL,setImageURL] = useState('')
    const[bookName,setBookName] = useState('')
    const[bookPrice,setBookPrice] = useState('');
    const[authorName,setAuthorName] = useState('') 
    useEffect(() => {
        new StoreService().getBookById(localStorage.getItem("bookId"))
        .then(responseDTO => {
            let bookData = responseDTO.data;
            setImageURL(bookData.data.imageURL)
            setBookName(bookData.data.bookName)
            setAuthorName(bookData.data.authorName);
            setBookPrice(bookData.data.bookPrice)
        }).catch(error => {
            console.log("Error while retrieving Book Data",JSON.stringify(error));
        })
    },[])
    return(
        <div className="cart">
                <div className="cart-container">
                    <div className="Book-container">
                        <div className='summary-title'>Order Summary</div>
                        <img className='book-cover' src={imageURL} alt="" />
                    </div>
                    <div className='book-info'>
                        <h4 className='book-title'>{bookName}</h4>
                        <p className='author-name'>{authorName}</p>
                        <h4>Rs. {bookPrice}</h4>
                    </div>
                </div>
                <div className="button-container">
                    <button className="place-order" onClick={event =>  window.location.href='/summary'} >CHECKOUT</button>
                </div>
        </div>
    );
}
export default OrderSummary