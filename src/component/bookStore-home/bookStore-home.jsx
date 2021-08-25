import React from 'react';
import '../bookStore-home/bookStore-home.scss';
import BookDetails from './BookDetails';
import BookService from '../../service/StoreService';
import NavigationBar from '../navigationBar/NavigationBar';
import Footer from '../footer/footer'
import Pagination from '@material-ui/lab/Pagination';

class BookStoreHome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookData : [],
            cartNumber:0,
            permData:[]
        };
        this.bookservice = new BookService();
    }

    componentDidMount(){
        this.getBookData();
        this.setState({cartNumber:localStorage.getItem("number") || 0})
    }

    changeCartNumber = () => {
        this.setState({cartNumber:localStorage.getItem("number") || 0})
    }
    getBookData = () => {
        this.bookservice.getAllBooks()
        .then(responseDTO => {
            let books = responseDTO.data;
            this.setState({bookData:books.data,permData:books.data});
        }).catch(error => {
            console.log("Error while Getting Data From Server");
        })
    }

    render(){
        return(
            <>
            <div>
                <NavigationBar 
                cartNumber = {this.state.cartNumber}
                search = {(value) => this.searchBook(value)}
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

searchBook(value) {
    console.log(value)
    if(value.length>3){
        console.log(
            this.state.bookData.filter(book=> {
                return book.bookName.toLowerCase().includes(value.toLowerCase())
            })
        )
        this.setState(
            {
                bookData:this.state.bookData.filter(book=> {
                    return book.bookName.toLowerCase().includes(value.toLowerCase())
                })
            }
        )

    }
    else if(value.length <= 3){
        this.setState({
            bookData:this.state.permData
        })
    }
}
}
export default BookStoreHome