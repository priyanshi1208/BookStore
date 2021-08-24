import React from 'react';
import images from '../../images/OrderPlaced.jpg';
import './Orderplaced.scss';
import Footer from '../footer/footer';
import NavigationBar from '../navigationBar/NavigationBar';
import { Link } from 'react-router-dom';

class OrderPlaced extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cartNumber:'',
        }
    }
    componentDidMount(){
        this.setState({cartNumber:localStorage.getItem("number") || 0})
    }
    removeLocalStorage = () => {
        localStorage.removeItem("number");
        localStorage.removeItem("bookId");
        localStorage.removeItem("cartDetails");
    }

    render(){
        return(
            <>
            <NavigationBar
            cartNumber = {this.state.cartNumber}/>
            <div className="order-placed">
                <div className="congo-image">
                    <img src={images} alt="Loading..."/>
                </div>
                <div className="order-content">
                    <p className="order-content1">hurray!!!your order is confirmed</p>
                    <p className="order-content2">the order id is #123456 save the order id for</p>
                    <p className="order-content3">further communication..</p>
                </div>
                <div className="order-table">
                    <table className="rtable">
                        <tr>
                            <th className="th">Email us</th>
                            <th className="th">Contact us</th>
                            <th className="th">Address</th>
                        </tr>
                        <tr>
                            <td className="td" width="30%">admin@bookstore.com</td>
                            <td className="td" width="30%">+918163475881</td>
                            <td className="td" width="40%">42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</td>
                        </tr>
                    </table>
                </div>
                <div className="continue-shopping-button">
                    <button className="shopping-button" ><Link onClick={this.removeLocalStorage()} className="ls-button" to="">CONTINUE SHOPPING</Link></button>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
            </>
        )
    }
}
export default OrderPlaced;
