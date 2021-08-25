import React from 'react';
import { useState,useEffect } from 'react';
import StoreService from '../../service/StoreService';

function OrderSummary(props){
    const[userId,setUserId] = useState('')
    const[totalAmount,setTotalAmount] = useState(0)
    useEffect(() => {
        new StoreService().getUserById(localStorage.getItem("userId"))
        .then(responseDTO => {
            let responseData = responseDTO.data;
            setUserId(responseData.data.userId)
        }).catch(error => {
            console.log("Error while Fetching Data"+JSON.stringify(error));
        })


        let amount = 0;
        JSON.parse(localStorage.getItem("cartDetails")).map((books) => (
           amount = amount + books.price
        ))
        setTotalAmount(amount)
    },[])

    const placeOrder = () => {
        let bookIds = []
        JSON.parse(localStorage.getItem("cartDetails")).map((books) => (
            bookIds.push(books.bookId)
        ))
    
        let order = {
            bookId:bookIds,
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
                    <p className = "amount">Total Amount Rs. {totalAmount}</p>
                </div>
                <div className="button-container">
                    <button className="place-order" onClick={placeOrder} >CHECKOUT</button>
                </div>
        </div>
    );
}
export default OrderSummary