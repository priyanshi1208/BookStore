import React from 'react';
import { useState,useEffect } from 'react';
import StoreService from '../../service/StoreService';

function OrderSummary(props){
    const[imageURL,setImageURL] = useState('')
    const[bookName,setBookName] = useState('')
    const[bookPrice,setBookPrice] = useState('')
    const[authorName,setAuthorName] = useState('') 
    const[bookId,setBookId] = useState('')
    const[userId,setUserId] = useState('')
    useEffect(() => {
        new StoreService().getBookById(localStorage.getItem("bookId"))
        .then(responseDTO => {
            let bookData = responseDTO.data;
            setImageURL(bookData.data.imageURL)
            setBookName(bookData.data.bookName)
            setAuthorName(bookData.data.authorName);
            setBookPrice(bookData.data.bookPrice)
            setBookId(localStorage.getItem("bookId"))
        }).catch(error => {
            console.log("Error while retrieving Book Data",JSON.stringify(error));
        })

        new StoreService().getUserById(localStorage.getItem("userId"))
        .then(responseDTO => {
            let responseData = responseDTO.data;
            setUserId(responseData.data.userId)
        }).catch(error => {
            console.log("Error while Fetching Data"+JSON.stringify(error));
        })
        
    },[])

    const placeOrder = () => {
        let order = {
            bookId:bookId,
            userId:userId
        }
        new StoreService().placeOrder(order)
        .then(response => {
            console.log("Data Added Successfully");
        }).catch(error => {
            console.log("Error while Posting",JSON.stringify(error));
        })

        window.location.replace("/summary")
    }

    return(
        <div className="cart">
                <div className="cart-container">
                    <div className="Book-container">
                        <div className='summary-title'>Order Summary</div>
                    </div>
                    {
                    JSON.parse(localStorage.getItem("cartDetails")).map((books) => (
                        <div className="details">
                        <div className = "book-container">
                                <img className="book-cover" src = {books.imgsrc} alt="book-image"></img>
                            </div>
                        <div className='book-info'>
                        <h4 className='book-title'>{books.bookName}</h4>
                        <p className='author-name'>{books.authorName}</p>
                        <h4>Rs. {books.price}</h4>
                    </div>
                    </div>
                    ))   
                    }
                </div>
                <div className="button-container">
                    <button className="place-order" onClick={placeOrder} >CHECKOUT</button>
                </div>
        </div>
    );
}
export default OrderSummary