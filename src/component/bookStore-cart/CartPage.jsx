import React, { useEffect } from 'react';
import './CartPage.scss';
import { useState } from 'react';
function CartPage(props) {
    const[imageURL,setImageURL] = useState('')
    const[bookName,setBookName] = useState('')
    const[bookPrice,setBookPrice] = useState('');
    const[authorName,setAuthorName] = useState('') 
    useEffect(() => {
        let cartDetails=[];
        cartDetails=localStorage.getItem('cartDetails');
        window.alert(cartDetails)
        // cartDetails.map((book)=>{
        //     window.alert(book.bookName)
        // })
        
    },[])
    //     new StoreService().getBookById(localStorage.getItem("bookId"))
    //     .then(responseDTO => {
    //         let bookData = responseDTO.data;
    //         setImageURL(bookData.data.imageURL)
    //         setBookName(bookData.data.bookName)
    //         setAuthorName(bookData.data.authorName);
    //         setBookPrice(bookData.data.bookPrice)
    //     }).catch(error => {
    //         console.log("Error while retrieving Book Data",JSON.stringify(error));
    //     })
    // },[])
        return(
            <div className="main">
                <div className="cart">
                <div className="cart-container">
                    <div className="book-container">
                        <h4 className='cart-title'>My Cart(1)</h4>
                        <img className='book-cover' src={imageURL} alt="" />
                    </div>
                    <div className='book-info'>
                        <h4 className='book-title'>{bookName}</h4>
                        <p className='author-name'>by {authorName}</p>
                        <h4>Rs. {bookPrice}</h4>
                        <span className='controls'>
                            <div className="quantity">
                                 <button disabled={true}>-</button>
                                 <input type="text" defaultValue={1} contentEditable={false}/>
                                 <button>+</button>
                            </div>
                            <h6>Remove</h6>
                        </span>
                    </div>
                </div>
                <div className="button-container">
                    <button className="place-order" onClick={(e)=>props.togglePanel(e)}>PLACE ORDER</button>
                </div>
            </div>
            </div>

            
        );
    }

export default CartPage;
