import React from 'react';
import '../bookStore-home/bookStore-home.scss';
import BookDetails from '../BookDetails/BookDetails';
import logo from '../../images/education.svg';
import search from '../../images/search.png';
import cart from '../../images/supermarket.svg';
import Footer from '../footer/footer';
import BookService from '../../service/StoreService';

class BookStoreHome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookData : [],
            cartNumber:''
        };
        this.bookservice = new BookService();
    }

    componentDidMount(){
        this.getBookData();
    }

    changeCartNumber = () => {
        this.setState({cartNumber:1})
    }

    getBookData = () => {
        this.bookservice.getAllBooks()
        .then(responseDTO => {
            let books = responseDTO.data;
            console.log("Data recieved after GET call successful" + books.data);
            this.setState({bookData:books.data});
        }).catch(error => {
            console.log("Error while Getting Data From Server");
        })
    }

    render(){
        return(
            <>
            <div>
            <nav className="navigation-bar">
                        <div className="bookstore-nav">
                            <img className="bookstore-img" src={logo} alt="logo"></img>
                            <div className="bookstore-text">Bookstore</div>
                        </div>
                        <div className="search-bar">
                            <img className="search-img" src={search} alt="search"></img>
                            <input type="text" className="search-input" placeholder="Search..."/>
                        </div>
                        <div className="cart-nav">
                            <p className="cart-txt">Cart</p>
                            <img className="cart-img" src={cart} alt="cart"></img>
                            {this.state.cartNumber}
                        </div>
                </nav>{/*End of NavBar*/}
            </div>
                <div>
                    <BookDetails
                      BookData = {this.state.bookData}
                      change = {this.changeCartNumber}
                    />
                </div>
                <div>
                    <Footer/>
                </div>
            </>
        )
    }
    
}
export default BookStoreHome