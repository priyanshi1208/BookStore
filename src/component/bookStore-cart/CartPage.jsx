
import './CartPage.scss';
function CartPage(props) {
    const remove=(booksId)=>{
        let cartDetails=JSON.parse(localStorage.getItem('cartDetails'));
        let newCart=cartDetails.filter((books)=>books.bookId!==booksId);
        localStorage.setItem('cartDetails',JSON.stringify(newCart));
        localStorage.setItem('number',newCart.length)
        window.location.reload();
    }
        return(
            <div className="main">
                <div className="cart">
                <div className="cart-container1">
                    <div className="book-container">
                        <h4 className='cart-title'>My Cart</h4>
                    </div>
                    {
                        JSON.parse(localStorage.getItem("cartDetails")).map((books) =>(
                            <div className="cart-details">
                                <div className="details">
                                    <div className = "book-container">
                                        <img className="book-cover1" src = {books.imgsrc} alt="book-image"></img>
                                    </div>
                                    <div className='book-info1'>
                                        <h4 className='book-title'>{books.bookName}</h4>
                                        <p className='author-name'>by {books.authorName}</p>
                                        <h4>Rs. {books.price}</h4>
                                        <div className="remove-btn" onClick={(e)=>remove(books.bookId)}>Remove</div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        ))
                    }
                </div>
                <div className="button-container1">
                    <button className="place-order1" onClick={(e)=>props.togglePanel(e)}>PLACE ORDER</button>
                </div>
            </div>
            </div>

            
        );
    }

export default CartPage;