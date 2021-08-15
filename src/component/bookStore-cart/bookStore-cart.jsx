import React from 'react';
import Footer from '../footer/footer';
import NavigationBar from '../navigationBar/NavigationBar';
import CustomerForm from './CustomerForm';
import CartPage from './CartPage';
import OrderSummary from './OrderSummary';

class BookStoreCart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open:false,
            openSummary:false
        }
        this.togglePanel=this.togglePanel.bind(this);
        this.togglePanelSummary=this.togglePanelSummary.bind(this);
    }
    togglePanel(e){
        this.setState({open:!this.state.open})
    }
    togglePanelSummary(e){
        this.setState({openSummary:!this.state.openSummary})
    }
    render(){
        return(
            <div>
                <section>
                    <NavigationBar/>
                </section>
                <section>
                    <CartPage
                        togglePanel={this.togglePanel}
                    />
                </section>
                <section>
                    {this.state.open?(<CustomerForm
                        togglePanelSummary={this.togglePanelSummary}
                        />):
                        <div className="main-container compressible-container">
                            <h3>Customer Details</h3>
                        </div>
                    }
                </section>
                <section>
                    {this.state.openSummary?(<OrderSummary/>):
                        <div className="cart compressible-container">
                            <h3>Order Summary</h3>
                        </div>
                    }
                </section>
                <section>
                    <Footer/>
                </section>
            </div>
        );
    }
        
}
export default BookStoreCart