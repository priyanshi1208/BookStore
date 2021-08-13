import React from 'react';
import '../bookStore-home/bookStore-home.scss';
import logo from '../../images/education.svg';
import search from '../../images/search.png';
import cart from '../../images/supermarket.svg';
import BookDetails from '../BookDetails/BookDetails';
import Footer from './Footer';
import BookService from '../../service/StoreService';

class BookStoreHome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookData : [],
            cartNumber:'',
        };
        this.bookservice = new BookService();
    }

    changeCartNumber = () => {
        this.setState({cartNumber:1});
    }

    componentDidMount(){
        this.getBookData();
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
                        </div>
                </nav>{/*End of NavBar*/}
                <div>
                    <BookDetails
                      BookData = {this.state.bookData}
                    />
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
            </>
        )
    }
    
}
export default BookStoreHome