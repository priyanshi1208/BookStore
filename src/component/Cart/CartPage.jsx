import React from 'react'
import './CartPage.scss';
function CartPage() {
    return (
        <div>

        <div id="cart">
            <h4 id='cart-title'>My Cart(2)</h4>
            <img className='book-cover' src="https://kbimages1-a.akamaihd.net/c2cddc29-ddd4-41d7-bb02-c89981b7c652/1200/1200/False/think-and-grow-rich-1937-original-masterpiece-by-napoleon-hill-2015-02-05.jpg" alt="" />
                <div id='book-info'>
                 <h4 className='book-title'>Think And Grow Rich</h4>
                    <p className='author-name'>By Napolean Hill</p>
                    <h4> ₹ 1500</h4>
                        <span className='controls'>
                            <div id="quantity">
                                 <button disabled={true}>-</button>
                                 <input type="text" defaultValue={1} contentEditable={false}/>
                                 <button>+</button>
                            </div>
                         <h6>Remove</h6>
                        </span>
                </div>
                <button id="place-order">PLACE ORDER</button>
                
        </div>

        </div>
    )
}

export default CartPage;
