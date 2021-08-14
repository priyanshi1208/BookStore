import React from 'react';
import '../bookStore-home/bookStore-home.scss';
import BookDetails from './BookDetails';
import BookService from '../../service/StoreService';
import NavigationBar from '../navigationBar/NavigationBar';
import Footer from '../footer/footer'

class BookStoreHome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookData : [],
            cartNumber:0
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
                <NavigationBar
                    cartNumber={this.state.cartNumber}
                />
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