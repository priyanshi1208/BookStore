import React from 'react';
function OrderSummary(props){
    return(
        <div className="cart">
                <div className="cart-container">
                    <div className="book-container">
                        <div className='summary-title'>Order Summary</div>
                        <img className='book-cover' src="https://kbimages1-a.akamaihd.net/c2cddc29-ddd4-41d7-bb02-c89981b7c652/1200/1200/False/think-and-grow-rich-1937-original-masterpiece-by-napoleon-hill-2015-02-05.jpg" alt="" />
                    </div>
                    <div className='book-info'>
                        <h4 className='book-title'>Think And Grow Rich</h4>
                        <p className='author-name'>By Napolean Hill</p>
                        <h4>₹ 1500</h4>
                    </div>
                </div>
                <div className="button-container">
                    <button className="place-order" onClick={event =>  window.location.href='/summary'} >CHECKOUT</button>
                </div>
        </div>
    );
}
export default OrderSummary